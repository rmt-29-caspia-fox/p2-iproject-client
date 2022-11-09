import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/chatroom',
      name: 'chatroom',
      component: () => import('../views/Chatroom.vue')
    }
  ]
})

export default router
