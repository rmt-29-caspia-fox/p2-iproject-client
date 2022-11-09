<template>
  <div
    class="card mt-3"
    style="width: 500px; max-height: 600px"
  >
    <div class="row g-0">
      <div class="col-md-4">
        <img
          v-if="bookData.volumeInfo.imageLinks"
          :src="bookData.volumeInfo.imageLinks.thumbnail"
          class="img-fluid rounded-start m-4"
          alt="..."
        />
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title">{{ bookData.volumeInfo.title }}</h5>
          <p class="card-text" v-if="bookData.volumeInfo.authors">
            <small class="text-muted fw-bold">by {{ this.authorData }}</small>
          </p>
          <p class="card-text" v-if="bookData.volumeInfo.subtitle">
            <small class="text-muted">{{ bookData.volumeInfo.subtitle }}</small>
          </p>
          <p class="card-text" v-if="bookData.volumeInfo.description">
            {{ desc ? desc : bookData.volumeInfo.description }}
          </p>
          <div v-if="isLogged">
            <a @click.prevent="emitFav">+ Add to Favourite</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../../../stores/counter';

export default {
  props: {
    bookData: Object,
  },
  data() {
    return {
      authorData: "",
      desc: null,
    };
  },
  beforeMount() {
    if (Array.isArray(this.bookData.volumeInfo.authors)) {
      let authors = "";
      if (this.bookData.volumeInfo.authors.length === 1) {
        this.authorData = this.bookData.volumeInfo.authors[0];
        // console.log(this.bookData.volumeInfo.authors)
      } else {
        for (let i = 0; i < this.bookData.volumeInfo.authors.length; i++) {
          authors += this.bookData.volumeInfo.authors[i];
          if (i === this.bookData.volumeInfo.authors.length - 1) {
            authors += ", and ";
          } else authors += ", ";
        }
        this.authorData = authors;
      }
    }
    if (
      this.bookData.volumeInfo.description &&
      this.bookData.volumeInfo.description.length > 150
    ) {
      let tmp = this.bookData.volumeInfo.description;

      this.desc = tmp.slice(0, 150) + " ... ";
    }
  },
  methods:{
    ...mapActions(useCounterStore,['postFavs']),
    emitFav(){
      this.postFavs(this.bookData);
    }
  },
  computed:{
    ...mapState(useCounterStore,['isLogged'])
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
  border: solid rgb(50, 140, 92) 1px;
  padding: 4px 10px ;
  font-size: smaller;
  border-radius: 4px;
}
a:hover {
  cursor: pointer;
  background-color: rgb(56, 122, 68);
  color: aliceblue;
}
</style>
