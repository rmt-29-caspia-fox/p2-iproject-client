<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue';
export default{
  components: {
    Navbar
  }
}
</script>

<template>
  <Navbar/>
  <RouterView />
</template>

<style>
.pointer{
  cursor: pointer;
}
</style>
