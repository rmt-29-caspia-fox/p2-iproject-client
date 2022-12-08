<template>
  <NavbarVue />
    <!-- Cards -->
    <div class="d-flex flex-row justify-content-center py-6" style="width: 100%;">
      <div class="d-flex flex-column mx-6" >
        <div  class="d-flex align-items-center mb-6">
          <img src="@/components/icons/google-log.png" class="logo"/>
          <h3 class="ms-4"> Book Search</h3>
        </div>
        <BookCardVue v-for="book in books" :bookData="book" />
      </div>
      <div class="d-flex flex-column" v-if="isguten">
        <div  class="d-flex align-items-center mb-6">
          <img src="@/components/icons/gutenberg-logo.png" class="logo"/>
          <h3 class="ms-4"> Project Gutenberg</h3>
        </div>
        <GutenCardVue v-for="book in gutenberg" :gutenbergData="book" />
      </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import { useCounterStore } from "@/stores/counter";
import NavbarVue from "../../components/Navbar.vue";
import BookCardVue from "./components/BookCard.vue";
import GutenCardVue from "./components/GutenCard.vue";
export default {
  components: {
    NavbarVue,
    BookCardVue,
    GutenCardVue,
  },
  methods: {
    ...mapActions(useCounterStore,["getLogged"])
  },
  data(){
    return{
      isguten:false
    }
  },
  computed: {
    ...mapState(useCounterStore, ["books","gutenberg"]),
  },
  created(){
    this.getLogged();
    if(this.gutenberg && this.gutenberg.length>0){
      this.isguten=true;
    } else {
      this.isguten=false
    }
  }
};
</script>

<style>
  .logo{
    width: 50px;
  }
</style>
