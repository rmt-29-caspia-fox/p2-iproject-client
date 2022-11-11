import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../views/HomePage.vue'
import LoginPage from '../views/LoginPage.vue'
import RegisterPage from '../views/RegisterPage.vue'
import BooksPage from '../views/BooksPage.vue'
import BookDetailPage from '../views/BookDetailPage.vue'
import BookFormPage from '../views/BookFormPage.vue'
import CategoriesPage from '../views/CategoriesPage.vue'
import CategoriesFormPage from '../views/CategoriesFormPage.vue'
import BorrowRequestPage from '../views/BorrowRequestPage.vue'
import ApprovedRequestPage from '../views/ApprovedRequestPage.vue'
import BookOutPage from '../views/BookOutPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/register",
      name: 'register',
      component: RegisterPage,
    },
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/books",
      component: BooksPage,
    },
    {
      path: "/books/:id",
      component: BookDetailPage,
    },
    {
      path: "/books/add",
      component: BookFormPage,
    },
    {
      path: "/books/edit",
      component: BookFormPage,
    },
    {
      path: "/categories/",
      component: CategoriesPage,
    },
    {
      path: "/categories/add",
      component: CategoriesFormPage,
    },
    {
      path: "/categories/edit",
      component: CategoriesFormPage,
    },
    {
      path: "/circulations/borrow-request",
      component: BorrowRequestPage,
    },
    {
      path: "/circulations/approved-request",
      component: ApprovedRequestPage,
    },
    {
      path: "/circulations/book-out",
      component: BookOutPage,
    },
  ],
});

export default router;
