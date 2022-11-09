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
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
    {
      path: "/register",
      name: "register",
      component: RegisterPage,
    },
    {
      path: "/books",
      name: "books",
      component: BooksPage,
    },
    {
      path: "/books/:id",
      name: "book-detail",
      component: BookDetailPage,
    },
    {
      path: "/books/add",
      name: "book-detail",
      component: BookFormPage,
    },
    {
      path: "/books/edit",
      name: "book-detail",
      component: BookFormPage,
    },
    {
      path: "/categories/",
      name: "book-detail",
      component: CategoriesPage,
    },
    {
      path: "/categories/add",
      name: "book-detail",
      component: CategoriesFormPage,
    },
    {
      path: "/categories/edit",
      name: "book-detail",
      component: CategoriesFormPage,
    },
    {
      path: "/circulations/borrow-request",
      name: "book-detail",
      component: BorrowRequestPage,
    },
    {
      path: "/circulations/approved-request",
      name: "book-detail",
      component: ApprovedRequestPage,
    },
    {
      path: "/circulations/book-out",
      name: "book-detail",
      component: BookOutPage,
    },
  ],
});

export default router;
