<script>
import { mapActions, mapWritableState } from "pinia";
import { useIndexStore } from "../stores/index";

export default {
  computed: {
    ...mapWritableState(useIndexStore, ["isLogin"]),
  },
  created() {
    if (localStorage.access_token) {
      this.isLogin = true;
    } else {
      this.isLogin = false;
    }
  },
  methods: {
    ...mapActions(useIndexStore, ["signOutHandler", "prcHandler"]),
    signOutButton() {
      this.signOutHandler();
    },
    homeButton() {
      this.prcHandler();
    },
  },
};
</script>

<template>
  <!-- ada logo yg ke home, sign in, sign up, sign out, cart -->
  <nav class="fixed-top">
    <div class="container">
      <div
        class="row"
        style="background-color: white; width: 94%; margin-left: 3%"
      >
        <div
          class="col-1 d-flex justify-content-center"
          style="padding-left: 40px"
        >
          <a @click.prevent="homeButton" href=""
            ><img src="../assets/New_Logo.png" alt="Logo" style="height: 100px"
          /></a>
        </div>
        <div class="col-11">
          <div class="row pt-4">
            <hr style="width: 94%; margin-left: 30px" />
          </div>
          <div class="row">
            <div>
              <div
                v-if="!isLogin"
                class="col gap-5 d-flex justify-content-center"
                style="padding-right: 105px"
              >
                <router-link class="navbar-brand" to="/">Home</router-link>|
                <router-link class="navbar-brand" to="/sign-in"
                  >Sign In</router-link
                >|
                <router-link class="navbar-brand" to="sign-up"
                  >Sign Up</router-link
                >
              </div>
              <div
                v-if="isLogin"
                class="col gap-5 d-flex justify-content-center"
                style="padding-right: 105px"
              >
                <a @click.prevent="homeButton" class="navbar-brand" href=""
                  >Home</a
                >|
                <router-link class="navbar-brand" to="/carts">Cart</router-link
                >|
                <router-link class="navbar-brand" to="/profile"
                  >Profile</router-link
                >|
                <a @click.prevent="signOutButton" class="navbar-brand" href="#"
                  >Sign Out</a
                >
              </div>
            </div>
          </div>
          <div class="row pt-3">
            <hr style="width: 94%; margin-left: 30px" />
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>
