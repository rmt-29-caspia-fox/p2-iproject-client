import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import SignUpPage from "../views/SignUpPage.vue";
import SignInPage from "../views/SignInPage.vue";
import CartPage from "../views/CartPage.vue";

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
      path: "/cart/:id",
      name: "cart",
      component: CartPage,
    },
  ],
});

router.beforeEach((to, from) => {
  if (to.name == "cart" && !localStorage.access_token) {
    return "/";
  }
});

export default router;
