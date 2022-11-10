<script>
import { mapActions } from 'pinia';
import { useUserStore } from '../stores/user';

export default ({
  data() {
    return {
      email: "",
      password: ""
    }
  },
  methods: {
    ...mapActions(useUserStore, ['inputLogin', 'googleLogin', 'discordLogin']),
    submitLogin() {
      this.inputLogin(this.email, this.password)
    },
    callback(response) {
      this.googleLogin(response);
    },
    discordTrigger() {
      this.discordLogin(this.$route.query.code);
    }
  },
  created() {
    this.discordTrigger()
  }
})
</script>

<template>
  <section class="ftco-section">
    <div class="container">
      <div class="row justify-content-center">

        <div class="col-md-7 col-lg-5">
          <div class="wrap">
            <div class="img" style="background-image: url('./assets/img/logo.jpg');"></div>
            <div class="login-wrap p-4 p-md-5">
              <div class="d-flex">
                <div class="w-100">
                  <h3 class="mb-4">Sign In</h3>
                </div>
                <div class="w-100">
                  <p class="social-media d-flex justify-content-end">
                    <a href="https://discord.com/api/oauth2/authorize?client_id=1039609972046168114&redirect_uri=https%3A%2F%2Fdbuilder-iproject.web.app%2Flogin&response_type=code&scope=identify%20email"
                      class="social-icon d-flex align-items-center justify-content-center">
                      <font-awesome-icon icon="fa-brands fa-discord" @click.prevent />
                    </a>
                    <GoogleLogin :callback="callback">
                      <a href="" class="social-icon d-flex align-items-center justify-content-center">
                        <font-awesome-icon icon="fa-brands fa-google" @click.prevent />
                      </a>
                    </GoogleLogin>
                    <RouterLink class="social-icon d-flex align-items-center justify-content-center" to="/">
                      <font-awesome-icon icon="fa-solid fa-arrow-left" />
                    </RouterLink>
                  </p>
                </div>
              </div>
              <form class="signin-form" @submit.prevent="submitLogin">
                <div class="form-group mt-3">
                  <input v-model="email" type="text" class="form-control" required>
                  <label class="form-control-placeholder" for="email">Email</label>
                </div>
                <div class="form-group">
                  <input v-model="password" id="password-field" type="password" class="form-control" required>
                  <label class="form-control-placeholder" for="password">Password</label>
                  <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                </div>
                <div class="form-group">
                  <button type="submit" class="form-control btn btn-primary rounded submit px-3">Sign
                    In</button>
                </div>
              </form>
              <p class="text-center">Not a member? <RouterLink data-toggle="tab" to="/register">Sign Up</RouterLink>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style>
@import '../assets/loginStyle.css'
</style>