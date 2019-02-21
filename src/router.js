import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/waitingroom',
      name: 'waitingRoom',
      component: () => import('./views/WaitingRoom.vue')
    },
    {
      path: '/playingroom',
      name: 'playingroom',
      component: () => import('./views/PlayingRoom.vue')
    }
  ]
})