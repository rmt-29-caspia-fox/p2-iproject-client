<script>
import { mapActions } from "pinia";
import { useUserStore } from "../stores/user";

export default {
    data() {
    return {
      formReg: {
        email: "",
        password: "",
        username: "",
      },
    };
  },
  methods: {
    ...mapActions(useUserStore, ["register"]),
    regHandler() {
      const payload = {
        email: this.formReg.email,
        password: this.formReg.password,
        username: this.formReg.username,
      };
      this.register(payload);
    },
  },
};
</script>

<template>
  <section class="flex flex-col md:flex-row h-screen items-center">
    <div class="bg-blue-600 hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
      <img src="../assets/Street_Fighter_6_Battle_Hub.jpg" alt="" class="w-full h-full object-cover" />
    </div>

    <div
      class="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12 flex items-center justify-center"
    >
      <div class="w-full h-100">
        <h1 class="text-xl font-bold">Matchingu</h1>
        <h1 class="text-xl md:text-2xl font-bold leading-tight mt-12">
          Register a new account
        </h1>

        <form class="mt-6" @submit.prevent="regHandler">
          <div>
            <label class="block text-gray-700">Email Address</label>
            <input
              type="email"
              v-model="formReg.email"
              placeholder="Enter Email Address"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              autofocus
              autocomplete
              required
            />
          </div>

          <div class="mt-4">
            <label class="block text-gray-700">Password</label>
            <input
              type="password"
              v-model="formReg.password"
              placeholder="Enter Password"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              required
            />
          </div>

          <div class="mt-4">
            <label class="block text-gray-700">Username</label>
            <input
              type="text"
              v-model="formReg.username"
              placeholder="Enter Username"
              minlength="4"
              class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none"
              required
            />
          </div>

          <button
            type="submit"
            class="w-full block bg-blue-500 hover:bg-blue-400 focus:bg-blue-400 text-white font-semibold rounded-lg px-4 py-3 mt-6"
          >
            Register
          </button>
        </form>

        <hr class="my-6 border-gray-300 w-full" />


        <p class="mt-8">
          Already have an account?
          <router-link to="/login"  class="text-blue-500 hover:text-blue-700 font-semibold">
            Login
          </router-link>
        </p>

        <p class="text-sm text-gray-500 mt-12">
          &copy; 2022 Talwind - All Rights Reserved.
        </p>
      </div>
    </div>
  </section>
</template>
