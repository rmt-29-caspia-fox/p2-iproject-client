<script>
import { mapActions } from "pinia";
import { useIndexStore } from "@/stores/index";

export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    ...mapActions(useIndexStore, ["signInHandler", "googleLogin"]),
    signInButton() {
      this.signInHandler(this.user);
    },
    callback(response) {
      this.googleLogin(response);
    },
  },
};
</script>

<template>
  <!-- ada form untuk login & social media login, & sign up, jika berhasil login, redirect ke home -->
  <div class="container">
    <div
      class="row d-flex justify-content-center"
      style="
        padding-left: 3%;
        padding-right: 3%;
        margin-top: 10%;
        margin-bottom: 3%;
      "
    >
      <div class="col-12 text-center">
        <h3>Sign In User</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <div class="card mt-3 mb-5" style="width: 500px">
          <div class="card-body text-center">
            <form
              action=""
              method="post"
              id="sign-up-form"
              @submit.prevent="signInButton"
            >
              <div class="d-flex justify-content-between">
                <label for="sign-in-email">Email</label>
                <label class="text-danger text-end">*</label>
              </div>
              <input
                type="text"
                class="form-control"
                id="sign-in-email"
                placeholder="Enter your email address ..."
                autocomplete="off"
                required
                v-model="user.email"
              />
              <br />
              <div class="d-flex justify-content-between">
                <label for="sign-in-password">Password</label>
                <label class="text-danger text-end">*</label>
              </div>
              <input
                type="password"
                class="form-control"
                id="sign-in-password"
                placeholder="Enter your password ..."
                autocomplete="off"
                required
                v-model="user.password"
              />
              <br />
              <button class="btn btn-lazpiz" type="submit">Sign in</button>
            </form>
            <div class="row">
              <div class="col-12 d-flex justify-content-between">
                <div
                  class="col-5 pb-2 pt-2 mb-4 mt-2 border-bottom border-$gray-500"
                ></div>
                <div
                  class="col-2 d-flex justify-content-center align-items-center"
                >
                  OR
                </div>
                <div
                  class="col-5 pb-2 pt-2 mb-4 mt-2 border-bottom border-$gray-500"
                ></div>
              </div>
            </div>
            <!-- <div id="google-button-sign-in"></div> -->
            <GoogleLogin :callback="callback" />
            <div
              class="pb-2 pt-2 mb-4 mt-2 border-bottom border-$gray-500"
            ></div>
            <div>
              <p>Don't have an account?</p>
              <router-link to="/sign-up" class="btn btn-lazpiz"
                >Sign up</router-link
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
