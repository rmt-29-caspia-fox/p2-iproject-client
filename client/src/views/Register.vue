<script></script>

<template>
  <!-- Register section -->
  <section
    id="register-section"
    class="bg-gradient-to-tr from-gray-500 to-dark min-h-screen flex items-center justify-center"
  >
    <div
      class="px-8 py-6 mx-4 mt-4 mb-4 text-left bg-gray-200 shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3 border rounded-xl"
    >
      <h3 class="text-2xl font-bold text-center">Register</h3>
      <form action="" @submit.prevent="registerHandler">
        <div class="mt-4">
          <div>
            <label class="block" for="Name">Username</label>
            <input
             
              type="text"
              id="register-username"
              placeholder="Enter your username"
              required
              autocomplete="off"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div class="mt-4">
            <label class="block" for="email">Email</label>
            <input
            
              type="email"
              id="register-email"
              autocomplete="off"
              placeholder="Enter email address"
              required
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div class="mt-4">
            <label class="block">Password</label>
            <input
            
              type="password"
              id="reqister-password"
              required
              autocomplete="off"
              placeholder="Enter your password"
              class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
            />
          </div>
          <div class="flex">
            <button
              type="submit"
              class="w-full px-6 py-2 mt-4 text-white bg-blue-900 rounded-lg hover:scale-105 duration-300"
            >
              Create Account
            </button>
          </div>
          <div class="mt-6 text-grey-dark">
            Already have an account?
            <a
              @click.prevent="navigation('/login')"
              id="go-login"
              class="text-blue-600 hover:underline"
            >
              Log in
            </a>
          </div>
        </div>
      </form>
    </div>
  </section>
  <!-- End Register Section -->
</template>
