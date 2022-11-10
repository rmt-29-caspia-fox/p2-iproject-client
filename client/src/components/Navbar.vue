<script>
import { mapActions, mapState } from "pinia";
import { useUserStore } from "../stores/user";

export default {
  computed: {
    ...mapState(useUserStore, ["userId"])
  },
  methods: {
    ...mapActions(useUserStore, ["logout"]),
    goProfile(){
      this.$router.push(`/profile/${this.userId.id}`)
    }
  },
};
</script>

<template>
  <header aria-label="Site Header" class="bg-white">
    <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="md:flex md:items-center md:gap-12">
          <a class="block text-blue-500 font-bold" href="/">
            <p>Matchingu</p>
          </a>
        </div>

        <div class="hidden md:block">
          <nav aria-label="Site Nav">
            <ul class="flex items-center gap-6 text-sm">
              <li>
                <a
                  class="text-black transition hover:text-blue-500"
                  @click.prevent="goProfile"
                  >
                  My Profile
                </a>
              </li>
            </ul>
          </nav>
        </div>

        <div class="flex items-center gap-4">
          <div class="sm:flex sm:gap-4">
            <a
              class="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-blue-700"
              href=""
              @click.prevent="logout"
            >
              Logout
            </a>
          </div>

          <div class="block md:hidden">
            <button
              class="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>
