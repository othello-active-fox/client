import Vue from 'vue'
import Vuex from 'vuex'
import db from '@/api/firestore.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    roomDatas: {},
    roomList: [],
    playermove: 'smile',
    playerscore: 0,
    dataUser: {}
  },
  mutations: {
    mutateRoom (state, roomArr) {
      state.roomList = roomArr
    },
    initialData (state, arrRoom) {
      state.roomList = arrRoom
    },
    mutateDataUser (state, payload) {
      state.dataUser = payload
    },
    getRoomDatas(state, payload) {
      state.roomDatas = payload
      console.log(payload);
    }
  },
  actions: {
    createUser ({ commit }, name) {
      db
        .collection('Users')
        .add({
          name: name
        })
        .then((docRef) => {
          console.log('Document successfully written with Id!', docRef.id)
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    },
    createRoom ({ commit }, dataObj) {
      db
        .collection('Rooms')
        .add({
          roomName: dataObj.roomName,
          capacity: dataObj.capacity,
          players: [],
          board: dataObj.board,
          turn: dataObj.turn
        })
        .then((docRef) => {
          console.log('success')
          return db
            .collection('Rooms')
            .get()
        })
        .then(snapshot => {
          let data = []
          snapshot.forEach(doc => {
            data.unshift({ id: doc.id, ...doc.data() })
          })
          commit('mutateRoom', data)
          // console.log(data, '=============================')
        })
        .catch(function (error) {
          console.error('Error writing document: ', error)
        })
    },
    getRoom ({ commit }) {
      db
        .collection('Rooms')
        .onSnapshot(function (querySnapshot) {
          const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
          commit('initialData', data)
        })
    },
    setUser ({ commit }, payload) {
      commit('mutateDataUser', payload)
    },
    getRoomDatas({ commit }, payload) { //masih hardcode
      db
        .collection("Rooms").doc(payload)
        .onSnapshot(function(doc) {
          commit('getRoomDatas', doc.data())
        });
    },
  }
})
