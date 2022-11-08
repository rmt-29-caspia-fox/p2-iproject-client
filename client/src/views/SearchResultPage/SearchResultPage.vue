<template>
  <NavbarVue />
    <!-- Cards -->
    <div class="">
      <div class="d-flex flex-column ">
        <BookCardVue v-for="book in books" :bookData="book" />
      </div>
    </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import NavbarVue from "../../components/Navbar.vue";
import BookCardVue from "./components/BookCard.vue";
import { useCounterStore } from "@/stores/counter";
export default {
  components: {
    NavbarVue,
    BookCardVue,
  },
  methods: {
    // ...mapActions(useCounterStore,("se"))
  },
  computed: {
    ...mapState(useCounterStore, ["books"]),
  },
};
</script>

<style></style>
