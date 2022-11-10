<script>
import { mapActions } from "pinia";
import { useGlobalStore } from "../stores/globalStore";

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions(useGlobalStore, ["login", "googleSignIn"]),

    callback(response) {
      // this.$emit("googleSingleSignOn", response);
      this.googleSignIn(response);
    },

    loginHandler() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      this.login(payload);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-md-8 col-lg-5">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title mb-4 text-center">Login</h3>
            <hr class="mb-4" />
            <form class="mb-4" @submit.prevent="loginHandler">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Email</label>
                <input
                  v-model="email"
                  type="email"
                  class="form-control"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label"
                  >Password</label
                >
                <input
                  v-model="password"
                  type="password"
                  class="form-control"
                />
              </div>
              <button type="submit" class="btn btn-primary">Login</button>
            </form>
            <div class="text-center">
              <GoogleLogin :callback="callback" class="google-oath" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  min-height: 55vh;
}
</style>
