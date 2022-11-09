import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import DeckBuilder from '../views/DeckBuilder.vue'
import DeckList from '../views/DeckList.vue'
import NotFound from '../views/404NotFound.vue'
import CardCompareView from '../views/CardCompareView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [{
        path: '/',
        name: 'cardCompare',
        component: CardCompareView
      }, {
        path: '/deck',
        name: 'DeckList',
        component: DeckList
      }, {
        path: '/deck/input',
        name: 'DeckInput',
        component: DeckBuilder,
        beforeEnter: (to, from) => {
          if (!localStorage.access_token) {
            return { name: 'login' }
          }
        }
      }, {
        path: '/deck/:id',
        name: 'DeckDetail',
        component: DeckBuilder,
        beforeEnter: (to, from) => {
          if (!localStorage.access_token) {
            return { name: 'login' }
          }
        }
      }]
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
  ]
})

router.beforeEach((to, from) => {
  if (to.path == '/login' && localStorage.access_token) {
    return { name: 'cardCompare' }
  } else if (to.path == '/deck' && !localStorage.access_token) {
    return { name: 'login' }
  } else if (to.path == '/register' && localStorage.access_token) {
    return { name: 'cardCompare' }
  }
})

export default router
