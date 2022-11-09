import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Covid from '../views/Covid.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/covid',
      name: 'covid',
      component: Covid
    },
  ]
})

export default router
