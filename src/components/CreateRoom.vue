<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card style="width:400px;">
        <v-card-title primary-title>
          <div class="container">
            <h3 class="headline mb-0">Create New Room</h3>
              <v-form>
                <v-container>
                  <v-layout>
                    <v-flex >
                      <v-text-field style="width:280px;" label="Room Name" solo v-model="roomData.roomName"></v-text-field>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-form>
              <v-btn color="orange" @click="createRoom">createRoom</v-btn>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  data () {
    return {
      roomData: {
        roomName: '',
        capacity: null,
        turn: 'white',
        board: {}
      }
    }
  },
  methods: {
    createRoom () {
      for (let i = 0; i <= 7; i++) {
        for (let j = 0; j <= 7; j++) {
          if ((i === 3 && j === 3) || (i === 4 && j === 4)) {
            this.roomData.board[`${i}-${j}`] = 'stone white'
          } else if ((i === 3 && j === 4) || (i === 4 && j === 3)) {
            this.roomData.board[`${i}-${j}`] = 'stone black'
          } else {
            this.roomData.board[`${i}-${j}`] = null
          }
        }
      }
      this.$store.dispatch('createRoom', this.roomData)
      this.roomData.roomName = ''
      this.roomData.capacity = null
    }
  }
}
</script>

<style>
</style>
