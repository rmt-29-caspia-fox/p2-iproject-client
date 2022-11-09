<template>
  <NavbarVue />
    <!-- Cards -->
    <div class="d-flex flex-row justify-content-center py-6" style="width: 100%;">
      <div class="d-flex flex-column" style="width: 50%;">
        <BookCardVue v-for="book in books" :bookData="book" />
      </div>
      <div class="d-flex flex-column">
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
    // ...mapActions(useCounterStore,("se"))
  },
  computed: {
    ...mapState(useCounterStore, ["books","gutenberg"]),
  },
};
</script>

<style></style>
