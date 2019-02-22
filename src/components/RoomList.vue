<template>
  <div>
    <v-layout class="container" v-for="(room, index) in roomList" :key="index" style="width:800px;">
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <h4>Room Name: {{room.roomName}}</h4>
          <h4>Joined: {{room.players.length}}</h4>
          <div class="text-xs-center">
            <v-dialog v-model="dialog" width="500">
              <v-btn slot="activator" color="orange lighten-2" @click="enterRoom(room)" dark>Join Room</v-btn>

              <v-card>
                <v-card-title class="headline red lighten-2" primary-title>Input Username</v-card-title>
                <Username @username="enteringPlayer" :room="room" ></Username>

                <v-divider></v-divider>
              </v-card>
            </v-dialog>
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import db from '@/api/firestore.js'
import Username from '@/components/Username.vue'
import swal from 'sweetalert'

export default {
  data () {
    return {
      rooms: [],
      dialog: false,
      selectedRoom: {},
      username: ''
    }
  },
  components: {
    Username
  },
  methods: {
    enterRoom (room) {
      db
        .collection('Rooms')
        .doc(`${room.id}`)
        .get()
        .then(doc => {
          this.selectedRoom = doc.data()
          this.selectedRoom.id = doc.id
        })
        .catch(err => {
          console.log(err)
        })
    },
    enteringPlayer (value) {
      let color = null
      if (this.selectedRoom.players.length >= 2) {
        swal('room penuh')
      } else {
        this.dialog = false
        if (!this.selectedRoom.players.length) {
          this.selectedRoom.players.push({ name: value.username, stone: 'white' })
          // color = 'white'
          localStorage.setItem('color', 'white')
        } else {
          this.selectedRoom.players.push({ name: value.username, stone: 'black' })
          // color = 'black'
          localStorage.setItem('color', 'black')
        }
        this.$store.dispatch('updateRoomDatas', { id: this.selectedRoom.id, value: this.selectedRoom })
        this.$store.dispatch('setUser', {
          room: value.room,
          username: value.username,
          stone: color
        })
        // console.log(this.selectedRoom)
        var unsubscribe = db.collection('Rooms').onSnapshot(function () {})
        unsubscribe()
        // console.log(this.selectedRoom, '===================')
        this.$router.push({ path: `/waitingroom/${this.selectedRoom.id}` })
      }
    },
    updateRoom (value) {
      db
        .collection('Rooms').doc(`${value.id}`)
        .update(value)
        .then((docRef) => {
          console.log('success')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    }
  },
  computed: {
    roomList () {
      return this.$store.state.roomList
    }
  },
  watch: {
    roomList (v) {
      // console.log("TEST");
      console.log(v, '=++=++==+===+++==')
    }
  }
}
</script>

<style>
</style>
