<script>
import { RouterLink } from "vue-router";
import { mapWritableState } from "pinia";
import { useGlobalStore } from "../stores/globalStore";

export default {
  computed: {
    ...mapWritableState(useGlobalStore, ["isLogin", "IsAdmin"]),
  },
  methods: {
    logoutHandler() {
      localStorage.clear();
      this.isLogin = false;
      this.isAdmin = false;
      this.$router.push("/");
    },
  },
};
</script>
<template>
  <header class="p-4 text-bg-dark mb-3">
    <div class="container">
      <div
        class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start"
      >
        <RouterLink
          to="/"
          class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
        >
          <img
            alt="Vue logo"
            class="bi me-4"
            src="@/assets/logo.png"
            height="46"
          />
        </RouterLink>

        <ul
          class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0"
        >
          <li>
            <RouterLink to="/" class="nav-link px-2 text-white"
              >Home</RouterLink
            >
          </li>
          <li v-if="isLogin">
            <RouterLink to="/" class="nav-link px-2 text-white"
              >History</RouterLink
            >
          </li>
        </ul>

        <div class="text-end">
          <!-- show on login false -->
          <span v-if="!isLogin">
            <RouterLink
              to="/login"
              type="button"
              class="btn btn-outline-light me-2"
            >
              <i class="fa-solid fa-right-to-bracket me-2"></i>Login
            </RouterLink>
            <RouterLink to="/register" type="button" class="btn btn-warning"
              ><i class="fa-solid fa-user me-2"></i>Sign-up</RouterLink
            >
          </span>

          <!-- shown on login true -->
          <span v-if="isLogin">
            <RouterLink
              to="/cart"
              type="button"
              class="btn btn-danger position-relative me-5"
            >
              <i class="fa-solid fa-heart me-2"></i>Cart
              <span
                class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-white text-muted"
                >999</span
              >
            </RouterLink>
            <button
              @click.prevent="logoutHandler"
              type="button"
              class="btn btn-secondary"
            >
              <i class="fa-solid fa-right-from-bracket me-2"></i>Logout
            </button>
          </span>
        </div>
      </div>
    </div>
  </header>
</template>
