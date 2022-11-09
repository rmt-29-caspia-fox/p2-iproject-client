<template>
  <NavbarVue />
  <div class="wrapper">
    <div class="loader ctr"></div>
  </div>
</template>

<script>
  import NavbarVue from '../components/Navbar.vue';
  export default {
    components:{
      NavbarVue
    }
  }
</script>

<style scoped>
  .loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
/* .wrapper{
  position: relative;
} */
.ctr{
  position: absolute;
  top: 25%;
  left: 45%;
  transform: translate(-50%, -50%);
}
</style>