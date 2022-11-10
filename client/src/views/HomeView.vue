<script>
import MangaCard from "../components/MangaCard.vue";
import { mapActions, mapState } from "pinia";
import { useMangaStore } from "../stores/manga";

export default {
  components: {
    MangaCard,
  },
  computed: {
    ...mapState(useMangaStore, ["mangas", "quotes"]),
    // ...mapWritableState(useMangaStore, ["filter"]),
  },
  methods: {
    ...mapActions(useMangaStore, ["fetchMangas", "fetchQuotes"]),
  },
  created() {
    this.fetchMangas();
    this.fetchQuotes();
  },
};
</script>

<template>
  <!-- bootstrap 12 col -->
  <section class="col-md-9 ms-sm-auto col-lg-12 px-md-4" id="product-section">
    <!-- quo -->
    <section class="vh-100">
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col col-lg-10 col-xl-8">
            <div class="card bg-warning text-dark rounded-3 mb-3">
              <div class="card-body p-4">
                <figure class="mb-0">
                  <blockquote class="blockquote">
                    <p class="pb-2">"{{ this.quotes[0].english }}"</p>
                  </blockquote>
                  <figcaption class="blockquote-footer mb-0 text-dark">
                    {{ this.quotes[0].character }} from
                    {{ this.quotes[0].anime }}
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- quot -->
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-8 pb-2 mb-3 border-bottom border-dark"
    >
      <h1 class="display-2">Mangas</h1>
    </div>
    <div class="row">
      <!-- left col -->

      <!-- ca -->
      <div class="col-3">
        <!-- search -->
        <h5>Latest Manga News</h5>
        <br />

        <a
          class="twitter-timeline"
          href="https://twitter.com/MangaMoguraRE?ref_src=twsrc%5Etfw"
          data-tweet-limit="4"
          >Tweets by MangaMoguraRE</a
        >
        <br />

        <a
          class="twitter-timeline"
          href="https://twitter.com/WSJ_manga"
          data-tweet-limit="4"
        >
          Tweets by @WSJ_manga
        </a>
      </div>
      <!-- right col -->
      <div class="col-9">
        <div class="row">
          <!-- card -->
          <MangaCard v-for="manga in mangas" :key="manga.id" :manga="manga" />
        </div>
        <!-- page -->
      </div>
    </div>
  </section>
</template>

<style scoped>
.pagesection {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
