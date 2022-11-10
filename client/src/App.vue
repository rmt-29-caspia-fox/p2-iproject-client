<script>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import { mapActions, mapWritableState } from "pinia";
import { useGlobalStore } from "./stores/globalStore";

export default {
  components: {
    Navbar,
    Footer,
  },
  computed: {
    ...mapWritableState(useGlobalStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useGlobalStore, []),
    // async googleSingleSignOn(response) {
    //   try {
    //     console.log(response.credential);
    //     const data = {
    //       access_token: "test",
    //     };
    //     localStorage.setItem("access_token", data.access_token);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
  },
  created() {
    if (localStorage.access_token) {
      this.isLogin = true;
      // this.getFavorites();
    } else {
      this.isLogin = false;
    }
  },
};
</script>

<template>
  <Navbar />
  <RouterView />
  <Footer />
</template>
