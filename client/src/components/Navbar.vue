<script>
import { mapState, mapActions } from 'pinia';
import { useUserStore } from '../stores/user';
export default {
  methods: {
    ...mapActions(useUserStore, ['checkAccessToken']),

    logoutHandler() {
      localStorage.removeItem("access_token")
      this.$router.push('/')
      this.checkAccessToken()
    }
  },
  created() {
    this.checkAccessToken()
  },
  computed: {
    ...mapState(useUserStore, ['isLogin'])
  }
}
</script>

<template>
  <nav aria-label="Site Nav" class="mx-auto flex max-w-3xl items-center justify-between p-4">
    <a href="/" class="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
      <span class="sr-only">Logo</span>
      👋
    </a>

    <ul class="flex items-center gap-2 text-sm font-medium text-gray-500">
      <li class="hidden lg:block">
        <router-link class="rounded-lg px-3 py-2" to="/"> Home </router-link>
      </li>

      <li><router-link to="/myrents" class="rounded-lg px-3 py-2" v-if="isLogin"> My Order </router-link></li>

      <li class="hidden lg:block" v-if="!isLogin">
        <router-link class="rounded-lg px-3 py-2" to="/login"> Login </router-link>
      </li>
      <li class="hidden lg:block" v-if="!isLogin">
        <router-link class="rounded-lg px-3 py-2" to="/register"> Register </router-link>
      </li>
      <li class="hidden lg:block">
        <button @click.prevent="logoutHandler" class="rounded-lg px-3 py-2" v-if="isLogin"> Logout </button>
      </li>
    </ul>
  </nav>

</template>