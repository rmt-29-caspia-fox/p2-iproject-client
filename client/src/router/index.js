import { createRouter, createWebHistory } from "vue-router";
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Detail from '../views/Detail.vue'
import PathNotFound from '../views/404.vue'
import Topup from '../views/Topup.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { 
      path: '/:pathMatch(.*)*',
      name: '404',
      component: PathNotFound
    },
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/:id/",
      name: "home_page",
      component: Home,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/product/:id",
      name: "product",
      component: Detail
    },
    {
      path: "/topup",
      name: "topup",
      component: Topup
    },
    {
      path: '/logout',
      name: 'logout'
    },
    // {
    //   path: '/whitelist',
    //   name: 'whitelist',
    //   component: Whitelist
    // }
  ],
});

router.beforeEach((to, from) => {
  if(to.name ==="login" && localStorage.access_token){
    return {name: 'home'}

  }

  if(to.name ==="register" && localStorage.access_token){
    return {name: 'home'}
  }

  if(to.name ==="topup" && !localStorage.access_token){
    return {name: 'home'}
  }
  // if(to.name ==="whitelist" && !localStorage.access_token){
  //   return {name: 'login'}
  // }
  // if(to.name === "home" && from.name === "login" && localStorage.access_token){
  //   // window.location.reload()
  // }
})

export default router;
