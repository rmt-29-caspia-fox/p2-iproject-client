<script>
import { mapActions, mapWritableState } from "pinia";
import { useCustomerStore } from "../stores/customer";

export default {
  methods: {
    ...mapActions(useCustomerStore, ["submitLogout"]),
    handleLogout() {
      this.submitLogout();
    },
  },
  computed: {
    ...mapWritableState(useCustomerStore, ["isLogin"]),
  },
  created() {
    if (localStorage.access_token) {
      this.isLogin = true;
    }
  },
};
</script>

<template>
  <nav class="navbar navbar-expand-md">
    <a class="navbar-brand" href=""
      ><img src="../assets/reccomangalogo.png" alt="" width="120" height="40"
    /></a>
    <button
      class="navbar-toggler navbar-dark"
      type="button"
      data-toggle="collapse"
      data-target="#main-navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- menu tengah -->
    <div class="collapse navbar-collapse" id="main-navigation">
      <ul class="navbar-nav">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink to="/bookmarks" v-if="isLogin" class="nav-link"
            >Bookmarks</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink to="/login" v-if="!isLogin" class="nav-link"
            >Login</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink to="/register" v-if="!isLogin" class="nav-link"
            >Register</RouterLink
          >
        </li>
      </ul>
    </div>
    <!-- menu kanan -->
    <div class="collapse navbar-collapse" id="main-navigation">
      <ul class="navbar-nav">
        <li class="nav-item">
          <button
            v-if="isLogin"
            type="button"
            class="btn btn-outline-warning"
            @click.prevent="handleLogout"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  </nav>
</template>
