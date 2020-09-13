import Vue from 'vue'
import VueRouter from 'vue-router'
import Character from '../views/Character.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Character',
    component: Character
  }
]

const router = new VueRouter({
  routes
})

export default router
