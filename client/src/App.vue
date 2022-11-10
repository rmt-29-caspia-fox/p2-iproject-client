<script>
import Navbar from './components/Navbar.vue'

  export default {
    components: {
      Navbar
    },
    data() {
      return {
        
      };
    },
    methods: {
    },
  }
</script>

<template>

  <!-- <Navbar :navbar='navbar' :userData="userData" @changePage="changePage" /> -->

  <!-- <div class="container" id="maincontent" style="padding: 100px 0;">
    <div class="">
      <router-view />
    </div>
  </div> -->
  <router-view />
  <!-- <footer>Created By AW Ressy</footer> -->
  
</template>