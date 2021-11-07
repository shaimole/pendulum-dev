import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../Register.vue'
import Login from '../Login.vue'
import Characters from '../components/Characters.vue'
import NewCharacter from '../components/NewCharacter.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/account',
    name: 'Account',
    redirect: '/account/login',
    faIcon: 'user'
  },
  { path: '/account/login', name: 'Login', component: Login },
  { path: '/account/register', name: 'Register', component: Register },
  {
    path: '/characters',
    name: 'App',
    component: Characters,
    faIcon: 'users'
  },
  { path: '*', redirect: '/account' },
  { path: '/characters/:id', name: 'Character', component: Characters },
  {
    path: '/characters/new/',
    name: 'Character creation',
    component: NewCharacter
  },
  {
    path: '/rules',
    name: 'Rules',
    faIcon: 'book'
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
