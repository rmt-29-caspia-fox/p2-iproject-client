<script>
import Header from "./components/Header.vue";
import Navbar from "./components/Navbar.vue";

export default {
  components: {
    Header,
    Navbar,
  },
};
</script>

<template>
  <Navbar />
  <Header />

  <RouterView />
</template>

<style scoped></style>
