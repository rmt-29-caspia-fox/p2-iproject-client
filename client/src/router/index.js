import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/Home.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/register",
      name: "register",
      component: () => import("../views/Register.vue"),
    },
    {
      path: "/chatroom/:id",
      name: "chatroom",
      component: () => import("../views/Chatroom1.vue"),
    },
    {
      path: "/profile/:id",
      name: "profile",
      component: () => import("../views/Profile.vue"),
    },
  ],
});

router.beforeEach((to, from) => {
  if (to.name == "home" && !localStorage.access_token) {
    return "/login";
  }
  if (to.name == "chatroom" && !localStorage.access_token) {
    return "/login";
  }
  if (to.name == "profile" && !localStorage.access_token) {
    return "/login";
  }
  if (to.name == "login" && localStorage.access_token) {
    return "/";
  }
  if (to.name == "register" && localStorage.access_token) {
    return "/";
  }
});

export default router;
