import { createRouter, createWebHistory } from "vue-router";
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', component: HomeView, name:'home'},
    {path: '/login', component: LoginPage , name: 'login' }
  ],
});

export default router;
