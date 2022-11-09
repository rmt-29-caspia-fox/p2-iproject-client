import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import Register from "../views/Register.vue"
import Login from "../views/Login.vue"
import Detail from '../views/Detail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/register",
      name: "register",
      component: Register,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },
    {
      path: "/vehicle/detail/:id",
      name: "detail",
      component: Detail,
    },
    
  ],
});

router.beforeEach((to, from) => {
  if(to.name == 'login' && localStorage.access_token) {
    return { name: 'home'}
  } else if(to.name == 'home' && !localStorage.access_token) {
    return { name: 'login'}
  }
  //  else if(to.name == 'favourites' && !localStorage.access_token) {
  //   return { name: 'login'}
  // } else if(to.name == 'update' && !localStorage.access_token) {
  //   return { name: 'login'}
  // } 
  
})


export default router;
