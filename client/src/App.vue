<script>
import NavBar from "./components/NavBar.vue";

export default {
  components: {
    NavBar,
  },
};
</script>

<template>
  <!-- Navbar muncul di semua Web Page -->
  <NavBar />
  <router-view />
</template>

<style>
body {
  background: linear-gradient(
    to right,
    #f6953e 0%,
    #f6953e 8.5%,
    #c57b3e 10%,
    white 10%,
    white 90%,
    #c57b3e 90%,
    #f6953e 91.5%,
    #f6953e 100%
  );
  font-family: sans-serif;
}
nav {
  font-family: sans-serif;
}
.btn-lazpiz {
  background-color: #f7d2b2;
  color: white;
}
.btn-lazpiz:hover {
  background-color: #f6953e;
  color: white;
}

.card-img-top {
  width: 100%;
  height: 15vw;
  object-fit: cover;
}
</style>
