<script>
import NavBar from './components/NavBar.vue'
import { mapWritableState } from 'pinia';
import { useUserStore } from './stores/user';

export default{
  components: {
    NavBar
  },
  computed: {
    ...mapWritableState(useUserStore, ['isLogin'])
  },
  created(){
    if(localStorage.access_token){
      this.isLogin = true
    } else {
      this.isLogin = false
    }
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
