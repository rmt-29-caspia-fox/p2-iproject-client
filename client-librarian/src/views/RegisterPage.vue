<script>
// import { mapActions, mapWritableState } from "pinia";
// import { useCustomerStore } from "../stores/customer";

export default {
  data() {
    return {
      registerForm: {
        username: "",
        email: "",
        password: "",
        phoneNumber: "",
        address: "",
      },
    }
  },
  // methods: {
  //   postRegister() {
  //     this.$emit("register", this.registerForm);
  //   },
  // },
  // computed: {
  //   ...mapWritableState(useCustomerStore, ["registerForm"]),
  // },
  // methods: {
  //   ...mapActions(useCustomerStore, ["registerCustomer"]),
  //   async addCustomer() {
  //     await this.registerCustomer(this.registerForm)
  //     this.$router.push('/login')
  //   },
  // },
};
</script>
<template>
  <section>
    <div>
      <div class="flex justify-center" style="height: 100vh">
        <div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-1/3">
          <div class="flex-1">
            <div class="text-center">
              <h2 class="text-4xl font-bold text-center">Liblib</h2>
              <p class="mt-3 text-gray-700">Create new account</p>
            </div>
            <div class="mt-10">
              <form @submit.prevent="addCustomer">
                <div>
                  <label for="email" class="block mb-2 text-sm text-gray-500"
                    >Email Address</label
                  >
                  <input
                    name="email"
                    placeholder="example@example.com"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-500 focus:ring-black-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    v-model="registerForm.email"
                  />
                </div>

                <div class="mt-6">
                  <label for="username" class="block mb-2 text-sm text-gray-500"
                    >Username</label
                  >
                  <input
                    type="text"
                    name="username"
                    placeholder="johndoe"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-500 focus:ring-black-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    v-model="registerForm.username"
                  />
                </div>

                <div class="mt-6">
                  <label for="password" class="block mb-2 text-sm text-gray-500"
                    >Password</label
                  >
                  <input
                    type="password"
                    name="password"
                    placeholder="Your Password"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-500 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    v-model="registerForm.password"
                  />
                </div>

                <div class="mt-6">
                  <label
                    for="phone-number"
                    class="block mb-2 text-sm text-gray-500"
                    >Phone Number</label
                  >
                  <input
                    type="text"
                    name="phone-number"
                    placeholder="ex: +62123456789"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-500 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    v-model="registerForm.phoneNumber"
                  />
                </div>

                <div class="mt-6">
                  <label for="address" class="block mb-2 text-sm text-gray-500"
                    >Address</label
                  >
                  <textarea
                    name="address"
                    cols="30"
                    rows="2"
                    class="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-500 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    v-model="registerForm.address"
                  ></textarea>
                </div>

                <div class="mt-6">
                  <button
                    type="submit"
                    class="w-full px-4 py-2 tracking-wide text-white bg-black"
                  >
                    Create Account
                  </button>
                </div>
              </form>

              <p class="mt-6 text-sm text-center text-gray-400">
                Feels like Deja Vu?
                <router-link
                  to="/login"
                  href=""
                  class="text-blue-500 focus:outline-none focus:underline hover:underline"
                  >Login</router-link
                >.
              </p>
            </div>
          </div>
        </div>
        <div
          class="hidden bg-cover bg-center lg:block lg:w-2/3"
          style="
            background-image: url(https://images.unsplash.com/photo-1614849963640-9cc74b2a826f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80);
          "
        ></div>
      </div>
    </div>
  </section>
</template>
