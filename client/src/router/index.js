import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import BookmarkView from "../views/BookmarkView.vue";
import RegisterView from "../views/RegisterView.vue";
import LoginView from "../views/LoginView.vue";
import MangaDetailView from "../views/MangaDetailView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/bookmarks",
      name: "bookmarks",
      component: BookmarkView,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterView,
    },
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/manga/:id",
      name: "mangaDetail",
      component: MangaDetailView,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: NotFoundView,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.name === "bookmarks" && !localStorage.access_token)
    next({ name: "login" });
  else if (to.name === "login" && localStorage.access_token)
    next({ name: "home" });
  else if (to.name === "register" && localStorage.access_token)
    next({ name: "home" });
  else next();
});

export default router;
