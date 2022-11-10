<script>
import { mapActions, mapState } from "pinia";
import { useMangaStore } from "../stores/manga";
import Swal from "sweetalert2";
import VueDisqus from "vue-disqus";

export default {
  data() {
    return {
      urlshare: "https://recco-manga.web.app" + this.$route.fullPath,
    };
  },
  computed: {
    ...mapState(useMangaStore, ["manga"]),
  },
  methods: {
    ...mapActions(useMangaStore, ["fetchMangaById", "addToBookmarks"]),
    async addToBookmarksLocal() {
      try {
        await this.addToBookmarks(this.manga);
        // console.log(this.product, "<<< pyld");
        Swal.fire({
          icon: "success",
          title: "Succes!",
          text: `Manga added to bookmarks`,
        });
        this.$router.push("/bookmarks");
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: `${error}`,
        });
      }
    },
  },
  created() {
    this.fetchMangaById(this.$route.params.id);
  },
};
</script>

<template>
  <!-- bootstrap 12 col -->

  <section class="col-md-9 ms-sm-auto col-lg-12 px-md-4" id="product-section">
    <div
      class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom border-dark"
    >
      <h1 class="display-5">{{ manga.attributes.titles.en }} Manga Details</h1>
    </div>
    <div class="container mt-5 mb-5">
      <div class="row d-flex justify-content-center">
        <div class="col-md-10">
          <div class="card">
            <div class="row">
              <div class="col-md-6">
                <div class="images p-3">
                  <div class="text-center p-4">
                    <img
                      id="main-image"
                      :src="manga.attributes.posterImage.original"
                      width="400"
                    />
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="product p-4">
                  <div
                    class="d-flex justify-content-between align-items-center"
                  >
                    <div class="d-flex align-items-center">
                      <i class="fa fa-long-arrow-left"></i>
                      <RouterLink to="/" class="ml-1">Back</RouterLink>
                    </div>
                    <i class="fa fa-shopping-cart text-muted"></i>
                  </div>
                  <div class="mt-4 mb-3">
                    <span class="text-uppercase text-muted brand"
                      >English Title</span
                    >
                    <h5 class="text-uppercase">
                      {{ manga.attributes.titles.en }}
                    </h5>
                    <span class="text-uppercase text-muted brand"
                      >Romaji Title</span
                    >
                    <h5 class="text-uppercase">
                      {{ manga.attributes.titles.en_jp }}
                    </h5>
                    <span class="text-uppercase text-muted brand"
                      >Japanese Title</span
                    >
                    <h5 class="text-uppercase">
                      {{ manga.attributes.titles.ja_jp }}
                    </h5>
                    <h6>Description:</h6>
                    <p class="about">
                      {{ manga.attributes.description }}
                    </p>
                    <span class="text-uppercase text-muted brand">Status</span>
                    <h5 class="text-uppercase">
                      {{ manga.attributes.status }}
                    </h5>
                    <span class="text-uppercase text-muted brand"
                      >Published</span
                    >
                    <h5 class="text-uppercase">
                      {{ manga.attributes.startDate }}
                    </h5>
                    <span class="text-uppercase text-muted brand"
                      >Serialization</span
                    >
                    <h5 class="text-uppercase">
                      {{ manga.attributes.serialization }}
                    </h5>
                    <span class="text-uppercase text-muted brand">Rating</span>
                    <h5 class="text-uppercase">
                      {{ manga.attributes.averageRating }}
                    </h5>
                    <span class="text-uppercase text-muted brand"
                      >Volumes Total</span
                    >
                    <h5
                      v-if="
                        manga.attributes.volumeCount === null ||
                        manga.attributes.volumeCount === 0
                      "
                      class="text-uppercase"
                    >
                      Ongoing
                    </h5>
                    <h5 v-else class="text-uppercase">
                      {{ manga.attributes.volumeCount }}
                    </h5>
                    <span class="text-uppercase text-muted brand"
                      >Chapters Total</span
                    >
                    <h5
                      v-if="
                        manga.attributes.chapterCount === null ||
                        manga.attributes.chapterCount === 0
                      "
                      class="text-uppercase"
                    >
                      Ongoing
                    </h5>
                    <h5 v-else class="text-uppercase">
                      {{ manga.attributes.chapterCount }}
                    </h5>
                    <div class="price d-flex flex-row align-items-center">
                      <h5 class="act-price">aaaa</h5>
                    </div>
                  </div>

                  <div class="sizes mt-5">
                    <h6 class="text-uppercase"></h6>
                  </div>

                  <div class="cart mt-4 align-items-center">
                    <button
                      @click.prevent="addToBookmarksLocal"
                      class="btn btn-warning text-uppercase mr-2 px-4"
                    >
                      Add to bookmarks
                    </button>
                    <i class="fa fa-heart text-muted"></i>
                    <i class="fa fa-share-alt text-muted"></i>
                  </div>
                </div>
              </div>
            </div>
            <img
              v-if="manga.attributes.coverImage"
              id="main-image"
              :src="manga.attributes.coverImage.original"
              background-size="cover"
            />
            <img v-else id="main-image" src="" background-size="cover" />
          </div>
          <!-- social sharer -->
          <br />
          <br />
          <div class="section-top2 text-center">
            <button>
              <ShareNetwork
                network="twitter"
                :url="`${this.urlshare}`"
                title="Hey, checkout this interesting manga!"
                description="This is another awesome manga for awesome readers"
              >
                <span>Share on Twitter</span>
              </ShareNetwork>
            </button>
            <button>
              <ShareNetwork
                network="facebook"
                :url="`${this.urlshare}`"
                title="Hey, checkout this interesting manga!"
                description="This is another awesome manga for awesome readers"
                quote="bunch of nice mangas."
                hashtags="manga,comic"
              >
                Share on Facebook
              </ShareNetwork>
            </button>
            <button>
              <ShareNetwork
                network="Email"
                :url="`${this.urlshare}`"
                title="Hey, checkout this interesting manga!"
                description="This is another awesome manga for awesome readers"
              >
                <span>Share on Email</span>
              </ShareNetwork>
            </button>
          </div>
          <!-- dsq -->
          <br />
          <br />
          <section class="comments" aria-labelledby="comment">
            <h2 id="comment">Comments</h2>
            <Disqus />
          </section>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
body {
  background-color: rgb(180, 32, 32);
}

.card {
  border: none;
  background-color: rgb(0, 0, 0);
}

.product {
  background-color: #eee;
}
.brand {
  font-size: 13px;
}
.act-price {
  color: red;
  font-weight: 700;
}
.dis-price {
  text-decoration: line-through;
}
.about {
  font-size: 14px;
}
.color {
  margin-bottom: 10px;
}
label.radio {
  cursor: pointer;
}
label.radio input {
  position: absolute;
  top: 0;
  left: 0;
  visibility: hidden;
  pointer-events: none;
}
label.radio span {
  padding: 2px 9px;
  border: 2px solid #ff0000;
  display: inline-block;
  color: #ff0000;
  border-radius: 3px;
  text-transform: uppercase;
}
label.radio input:checked + span {
  border-color: #ff0000;
  background-color: #ff0000;
  color: #fff;
}
.btn-danger {
  background-color: #ff0000 !important;
  border-color: #ff0000 !important;
}
.btn-danger:hover {
  background-color: #da0606 !important;
  border-color: #da0606 !important;
}
.btn-danger:focus {
  box-shadow: none;
}
.cart i {
  margin-right: 10px;
}
</style>
