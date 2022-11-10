<script>
import { mapActions } from 'pinia';
import { useUserStore } from '../stores/user';
import NavbarVue from '../components/Navbar.vue';
import Banner from '../components/Banner.vue'
import VehiclesVue from '../components/Vehicles.vue';
import WeatherVue from '../components/Weather.vue';

export default {
  components: {
    NavbarVue,
    Banner,
    VehiclesVue,
    WeatherVue
  },
  created() {
    this.checkAccessToken()
  },
  methods: {
    ...mapActions(useUserStore, ['checkAccessToken', 'fetchWeather'])

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
    <WeatherVue class="float-right"/>
  </div>
  <div>
    <VehiclesVue />
  </div>
  
</template>
