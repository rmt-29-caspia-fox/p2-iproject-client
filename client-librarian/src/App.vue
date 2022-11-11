<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import useLibrarianStore from './stores/librarian'
import { mapWritableState, mapActions } from 'pinia'
export default {
  components: { Navbar },
  computed: {
    ...mapWritableState(useLibrarianStore, ['isLogin'])
  },
  methods: {
    ...mapActions(useLibrarianStore, ['loginHandler'])
  },
  created() {
    this.loginHandler()
  }
}
</script>
<template>
  <Navbar v-if="isLogin" />
  <RouterView />
</template>