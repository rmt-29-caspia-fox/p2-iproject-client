import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import FavoritePage from '../views/FavoritePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: HomePage, name: 'home'},
    {path: '/login', component: LoginPage, name: 'login'},
    {path: '/favorites', component: FavoritePage, name: 'favorites'}
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === 'favorites' && !localStorage.access_token) next({ name: 'login' })
  if (to.name === 'login' && localStorage.access_token) next({ name: 'home'})
  next()
})



export default router
