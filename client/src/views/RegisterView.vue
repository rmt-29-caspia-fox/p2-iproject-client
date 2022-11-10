<script>
import { mapActions } from 'pinia';
import { useUserStore } from '../stores/user';

export default {
  data() {
    return {
      payload: {
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
      }
    }
  },
  methods: {
    ...mapActions(useUserStore, ['inputRegister']),
    submitRegister() {
      this.inputRegister(this.payload);
    }
  }
}
</script>

<template>
  <section class="ftco-section">
    <div class="container">
      <div class="row justify-content-center">

        <div class="col-md-7 col-lg-5">
          <div class="wrap">
            <div class="login-wrap p-4 p-md-5">
              <div class="d-flex">
                <div class="w-100">
                  <h3 class="mb-4">Register</h3>
                </div>
                <div class="w-100">
                  <p class="social-media d-flex justify-content-end">
                    <RouterLink class="social-icon d-flex align-items-center justify-content-center" to="/login">
                      <font-awesome-icon icon="fa-solid fa-arrow-left" />
                    </RouterLink>
                  </p>
                </div>
              </div>
              <form class="signin-form" @submit.prevent="submitRegister">
                <div class="form-group mt-3">
                  <input v-model="payload.username" type="text" class="form-control" required>
                  <label class="form-control-placeholder" for="username">Username</label>
                </div>
                <div class="form-group mt-3">
                  <input v-model="payload.email" type="text" class="form-control" required>
                  <label class="form-control-placeholder" for="email">Email</label>
                </div>
                <div class="form-group mt-3">
                  <input v-model="payload.password" id="password-field" type="password" class="form-control" required>
                  <label class="form-control-placeholder" for="password">Password</label>
                  <span toggle="#password-field" class="fa fa-fw fa-eye field-icon toggle-password"></span>
                </div>
                <div class="form-group mt-3">
                  <input v-model="payload.phoneNumber" type="text" class="form-control" required>
                  <label class="form-control-placeholder" for="email">Phone Number</label>
                </div>
                <div class="form-group mt-3">
                  <button type="submit" class="form-control btn btn-primary rounded submit px-3">Register</button>
                </div>
              </form>
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