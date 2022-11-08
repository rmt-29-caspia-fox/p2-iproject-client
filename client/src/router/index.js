import { createRouter, createWebHistory } from "vue-router";
import LandingView from "../views/LandingView.vue";
import FormOrderView from "../views/FormOrderView.vue";
import WaitinglistView from "../views/WaitinglistView.vue";
import MapView from "../views/MapView.vue";

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
      path: "/admin",
      name: "cms",
      children: [
        { path: "/login", name: "cms-login" },
        { path: "/table", name: "cms-table" },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name === "cms-table" && !localStorage.access_token) {
    return to.name === "cms-login";
  } else next();
});

export default router;
