<template>
  <div>
    <v-layout align-start justify-center row fill-height>
    <CreateRoom></CreateRoom>
    <RoomList></RoomList>
    </v-layout>
  </div>
</template>

<script>
import CreateRoom from '@/components/CreateRoom.vue'
import RoomList from '@/components/RoomList.vue'

export default {
  name: 'home',
  components: {
    CreateRoom,
    RoomList
  },
  created () {
    this.$store.dispatch('getRoom')
  }
}
</script>
