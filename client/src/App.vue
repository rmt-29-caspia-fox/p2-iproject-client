<script>
import { RouterView } from 'vue-router';
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: {
    Navbar,
    Footer
  },
}
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>
