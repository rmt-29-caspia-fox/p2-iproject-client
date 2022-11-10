import { createRouter, createWebHistory } from "vue-router";
import LandingView from "../views/LandingView.vue";
import FormOrderView from "../views/FormOrderView.vue";
import WaitinglistView from "../views/WaitinglistView.vue";
import MapView from "../views/MapView.vue";
import AdminLogin from "../views/AdminLoginView.vue"
import AdminTable from "../views/AdminTableView.vue"


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "landing",
      component: LandingView,
    },
    { path: "/map", name: "map", component: MapView },
    {
      path: "/order",
      name: "order", //order form
      component: FormOrderView,
    },
    {
      path: "/waitinglist",
      name: "waitinglist", //table book,
      component: WaitinglistView,
    },
    {
      path: "/waitinglist/rute",
      name: "rute", //table book,
    },
    {
      path: "/admin/login",
      name: "cms-login",
      component: AdminLogin,
    },
    {
      path: "/admin",
      name: "cms-table",
      component: AdminTable,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name === "cms-table" && !localStorage.access_token) {
    next("/admin/login")
  } else next();
});

export default router;
