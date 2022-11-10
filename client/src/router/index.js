import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/Home.vue";
import Register from "../views/Register.vue"
import Login from "../views/Login.vue"
import Detail from '../views/Detail.vue'
import RentPage from '../views/RentPage.vue'
import PayNow from '../views/PayNow.vue'
import MyRents from '../views/MyRents.vue'

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

    {
      path: "/vehicle/rent/:id",
      name: "rent",
      component: RentPage,
    },
    {
      path: "/vehicle/rent/pay/:id",
      name: "pay-detail",
      component: PayNow,
    },
    {
      path: "/myrents",
      name: "myrents",
      component: MyRents,
    },
    
  ],
});

router.beforeEach((to, from) => {
  if(to.name == 'login' && localStorage.access_token) {
    return { name: 'home'}
  } else if(to.name == 'register' && localStorage.access_token) {
    return { name: 'home'}
  } else if(to.name == 'rent' && !localStorage.access_token) {
    return { name: 'login'}
  } else if(to.name == 'pay-detail' && !localStorage.access_token) {
    return { name: 'login'}
  } else if(to.name == 'myrents' && !localStorage.access_token) {
    return { name: 'login'}
  } 
  //  else if(to.name == 'favourites' && !localStorage.access_token) {
  //   return { name: 'login'}
  // } else if(to.name == 'update' && !localStorage.access_token) {
  //   return { name: 'login'}
  // } 
  
})


export default router;
