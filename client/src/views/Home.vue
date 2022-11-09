<script>
import NavbarVue from '../components/Navbar.vue';
import Banner from '../components/Banner.vue'
import VehiclesVue from '../components/Vehicles.vue';

export default {
  components: {
    NavbarVue,
    Banner,
    VehiclesVue
  }
}
</script>

<template>
  <div>
    <NavbarVue />
  </div>
  <div>
    <Banner />
  </div>
  <div>
    <VehiclesVue />
  </div>
  
</template>
