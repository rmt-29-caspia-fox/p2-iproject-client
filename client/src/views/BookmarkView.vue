<script>
import BookmarkCard from "../components/BookmarkCard.vue";
import { mapActions, mapState } from "pinia";
import { useMangaStore } from "../stores/manga";

export default {
  components: {
    BookmarkCard,
  },
  computed: {
    ...mapState(useMangaStore, ["bookmarks"]),
  },
  methods: {
    ...mapActions(useMangaStore, ["fetchBookmarks"]),
  },
  created() {
    this.fetchBookmarks();
  },
};
</script>

<template>
  <!-- bootstrap 12 col -->
  <section class="col-md-9 ms-sm-auto col-lg-12 px-md-4" id="product-section">
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom border-dark"
    >
      <h1 class="display-2">Bookmarks</h1>
    </div>
    <!-- <div class="row"> -->
    <!-- right col -->
    <div class="col-12">
      <div class="row">
        <!-- card -->
        <BookmarkCard
          v-for="bookmark in bookmarks"
          :key="bookmark.id"
          :bookmark="bookmark"
        />
      </div>
    </div>
    <!-- </div> -->
  </section>
</template>

<style scoped></style>
