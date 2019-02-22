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
      path: '/waitingroom/:id',
      name: 'waitingRoom',
      component: () => import('./views/WaitingRoom.vue')
    },
    {
      path: '/playingroom/:id',
      name: 'playingroom',
      component: () => import('./views/PlayingRoom.vue')
    }
  ]
})
