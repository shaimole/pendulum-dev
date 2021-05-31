import Vue from 'vue'
import VueRouter from 'vue-router'
import Register from '../Register.vue'
import Login from '../Login.vue'
import Characters from '../components/SkillTree.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Login', component: Login },
  { path: '/register', name: 'Register', component: Register },
  { path: '/app', name: 'App', component: Characters }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
