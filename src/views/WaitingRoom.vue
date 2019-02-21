<template>
  <div>
    <h1>Waiting for other players...</h1>
    <v-btn large :to="'/'">BACK</v-btn>
  </div>
</template>


<script>
import db from "@/api/firestore.js";
export default {
  name: "waitingRoom",
  data() {
    return {
      dataRoomList: [],
      data: [],
      dataRoom: null,
      username: "",
      players: []
    };
  },
  methods: {
    getDataRoom() {
      db.collection("Rooms")
        .get()
        .then(snapshot => {
          let dataArr = [];
          snapshot.forEach(doc => {
            dataArr.unshift({ id: doc.id, ...doc.data() });
          });
          this.dataRoomList = dataArr;
        })
        .catch(err => {
          console.log(err);
        });
    },
    getOneRoom() {
      db.collection("Rooms")
        .doc(`${this.dataRoom.id}`)
        .get()
        .then(doc => {
          console.log(doc.data());
          this.dataRoom = doc.data();
        })
        .catch(err => {
          console.log(err);
        });
    },
    openRoom(value) {
      this.dataRoom = value;
    },
    joinRoom() {
      this.dataRoom.players.push(this.username);
      this.username = "";
      this.createRoom(this.dataRoom);
      this.getOneRoom(this.dataRoom.id);
    },
    createRoom(value) {
      db.collection("Rooms")
        .doc(`${this.dataRoom.id}`)
        .update(value)
        .then(docRef => {
          console.log("success");
        })
        .catch(function(error) {
          console.error("Error writing document: ", error);
        });
    },
    waitingPlayer() {
      let id = this.$store.state.dataUser;
      console.log(id, "000000000000000000");
      let roomId = this.$store.state.dataUser.room.id;
      db.collection("Rooms")
        .doc(`${roomId}`)
        .onSnapshot(doc => {
          console.log(doc.data().players, "{}{}{}{}{}{}{}");
          if (doc.data().players.length == 2) {
            this.$router.push({ path: `/playingroom` });
          }
        });
    }
  },
  mounted() {
    // this.getDataRoom()
    this.waitingPlayer();
  },
  computed: {
    dataUser() {
      return this.$store.state.dataUser;
    }
  },
  watch: {
    dataUser(value) {
      console.log(value, "rooooooooooooooom");
    }
  }
};
</script>

