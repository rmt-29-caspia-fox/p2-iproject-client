<script>
import { mapActions, mapWritableState } from 'pinia';
import useLibrarianStore from '../stores/librarian';

export default {
  data() {
    return {
      loginForm: {
      email: "",
      password: "",
    },
    }
  },
  methods: {
    ...mapActions(useLibrarianStore, ['login']),
   async submitLogin() {
    try {
      await this.login(this.loginForm)
    } catch (error) {
      console.log(error);
    }
    }
  }
};
</script>
<template>
  <section id="login-section" class="max-h-screen overflow-y-hidden">
    <div class="">
      <div class="flex justify-center h-screen">
        <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-1/3">
          <div class="flex-1">
            <div class="text-center">
              <h2 class="text-4xl font-bold text-center">Liblib</h2>
              <p class="mt-3 text-gray-700">Sign in to access your account</p>
            </div>

            <div class="mt-10">
              <form @submit.prevent="submitLogin">
                <div>
                  <label
                    for="login-email"
                    class="block mb-2 text-sm text-gray-500"
                    >Email Address</label
                  >
                  <input
                    type="text"
                    name="login-email"
                    id="login-email"
                    placeholder="example@example.com"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-500 focus:ring-black-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    v-model="loginForm.email"
                  />
                </div>

                <div class="mt-6">
                  <div class="flex justify-between mb-2">
                    <label for="login-password" class="text-sm text-gray-500"
                      >Password</label
                    >
                  </div>

                  <input
                    type="password"
                    name="login-password"
                    id="login-password"
                    placeholder="Your Password"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-500 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    v-model="loginForm.password"
                  />
                </div>

                <div class="mt-6">
                  <button
                    type="submit"
                    class="w-full px-4 py-2 tracking-wide text-white bg-black"
                  >
                    Sign in
                  </button>
                </div>
                <GoogleLogin :callback="callback" class="min-w-full mt-4" />
              </form>

              <p class="mt-6 text-sm text-center text-gray-400">
                Don&#x27;t have an account yet?
                <router-link
                  to="/register"
                  href=""
                  class="text-blue-500 focus:outline-none focus:underline hover:underline"
                  >Sign up</router-link
                >.
              </p>
            </div>
          </div>
        </div>
        <div
          class="hidden bg-cover bg-center lg:block lg:w-2/3"
          style="
            background-image: url(https://images.unsplash.com/photo-1532012197267-da84d127e765?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);
          "
        ></div>
      </div>
    </div>
  </section>
</template>
