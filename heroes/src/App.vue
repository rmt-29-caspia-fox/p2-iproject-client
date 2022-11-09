<script>
import NavBar from './components/NavBar.vue'

export default{
  components: {
    NavBar
  }
}
</script>

<template>
  <NavBar />
  <router-view />
</template>

<style>
.margin-navbar{
  margin-top: 70px !important;
}
</style>
