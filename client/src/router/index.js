import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import SignUpPage from "../views/SignUpPage.vue";
import SignInPage from "../views/SignInPage.vue";
import CartPage from "../views/CartPage.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: SignUpPage,
    },
    {
      path: "/sign-in",
      name: "sign-in",
      component: SignInPage,
    },
    {
      path: "/carts",
      name: "carts",
      component: CartPage,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: NotFoundPage,
    },
  ],
});

router.beforeEach((to, from) => {
  if (to.name == "carts" && !localStorage.access_token) {
    return "/";
  }
  if (to.name == "sign-up" && localStorage.access_token) {
    return "/";
  }
  if (to.name == "sign-in" && localStorage.access_token) {
    return "/";
  }
});

export default router;
