<script>
import { mapState } from 'pinia';
import { useUserStore } from '../stores/user';
export default {
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

      <li><a class="rounded-lg px-3 py-2" href=""> My Order </a></li>

      <li class="hidden lg:block" v-if="!isLogin" >
        <router-link class="rounded-lg px-3 py-2" to="/login"> Login </router-link>
      </li>
      <li class="hidden lg:block" v-if="!isLogin" >
        <router-link class="rounded-lg px-3 py-2" to="/register"> Register </router-link>
      </li>
      <li class="hidden lg:block" >
        <button class="rounded-lg px-3 py-2" > Logout </button>
      </li>
    </ul>
  </nav>

</template>