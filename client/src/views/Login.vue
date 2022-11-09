<script>
import {mapActions} from 'pinia'
import {useIndexStore} from '@/stores/index'

export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    ...mapActions(useIndexStore, ['loginHandler']),
    loginAction() {
      let login = {
        email: this.user.email,
        password: this.user.password
      }
      this.loginHandler(login)
    },
    navigation(page) {
      this.$router.push(page)
    }
  }
}
</script>



<template>
  <!-- Login Section -->
  <section
    id="login-section"
    class="bg-gradient-to-tr from-gray-500 to-white min-h-screen flex items-center justify-center"
  >
    <!-- login container -->
    <div
      class="bg-gray-200 flex justify-center rounded-2xl shadow-lg max-w-3xl p-5 items-center"
    >
      <!-- form -->
      <div class="md:w-1/2 px-16">
        <h2 class="font-bold text-2xl">Login</h2>
        <p class="text-sm mt-4">Log in to your account</p>

        <form
          @submit.prevent="loginAction"
          action=""
          class="flex flex-col gap-4"
        >
          <input
           v-model="user.email"
            class="p-2 mt-8 rounded-xl border"
            id="login-email"
            type="email"
            placeholder="Email"
            required
          />
          <div class="relative">
            <input
             v-model="user.password"
              class="p-2 rounded-xl border w-full"
              id="login-password"
              type="password"
              placeholder="Password"
              required
            />
          </div>
          <button
            type="submit"
            class="bg-blue-900 border rounded-lg text-white py-2 hover:scale-105 duration-300"
          >
            Login
          </button>
        </form>

        <div class="mt-10 grid grid-cols-3 items-center">
          <hr class="border-gray-400" />
          <p class="text-center">OR</p>
          <hr class="border-gray-400" />
        </div>

          <div class="flex justify-center">
            <GoogleLogin :callback="loginGoogle" />
          </div>
        

        <div class="mt-3 text-xs flex justify-between items-center">
          <p>Dont have an account?</p>
          <button
            id="go-register"
            class="py-2 px-5 bg-white border rounded-xl hover:scale-105 duration-300"
            @click="navigation('/register')"
          >
            Register
          </button>
        </div>
      </div>

      <!-- image -->
      <div class="md:block hidden w-1/2">
        <img
          class="rounded-2xl"
          src="https://images.unsplash.com/photo-1584931423298-c576fda54bd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
      </div>
    </div>
  </section>
  <!-- End Login Section -->
</template>