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
router.beforeEach((to, from, next)=> {
  if(to.name === `home` && !localStorage.getItem('access_token')) next({name: `login`})
  if(to.name === `covid` && !localStorage.getItem('access_token')) next({name: `login`})
  if((to.name === `login` || to.name === `register`) && localStorage.getItem('access_token')) next({name: `home`})
  else next()
})

export default router
