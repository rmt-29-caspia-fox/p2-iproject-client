import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomePage.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/RegisterPage.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LoginPage.vue"),
    },
    {
      path: "/details/:id",
      name: "details",
      component: () => import("../views/DetailProduct.vue"),
    },
    {
      path: "/histories",
      name: "histories",
      component: () => import("../views/HistoryPage.vue"),
    },
  ],
});

export default router;
