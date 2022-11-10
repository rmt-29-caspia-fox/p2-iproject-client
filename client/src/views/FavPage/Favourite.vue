<template>
  <NavbarVue />
  <div class="d-flex flex-wrap">
    <!-- FavCard -->
    <FavCardVue v-for="bookData in favs" :bookData="bookData"/>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from "@/stores/counter";
import NavbarVue from '../../components/Navbar.vue';
import FavCardVue from './components/FavCard.vue'
  export default {
    components : {
      NavbarVue, FavCardVue
    },
    methods:{
      ...mapActions(useCounterStore,["fetchFavs"]),
    },
    created() {
      this.fetchFavs();
    },
    updated(){
      
    },
    watch: {
      favs(newQuestion){
        this.fetchFavs();
      }
    },
    computed:{
      ...mapState(useCounterStore,['favs'])
    }
  }
</script>