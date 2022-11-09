<script>
import { mapActions } from 'pinia';
import { useUserStore } from '../stores/user';
import NavbarVue from '../components/Navbar.vue';
import Banner from '../components/Banner.vue'
import VehiclesVue from '../components/Vehicles.vue';

export default {
  components: {
    NavbarVue,
    Banner,
    VehiclesVue
  },
  created() {
    this.checkAccessToken()
  },
  methods: {
    ...mapActions(useUserStore, ['checkAccessToken'])

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
