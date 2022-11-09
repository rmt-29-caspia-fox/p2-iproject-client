<template>
  <div
    class="card mb-3"
    style="max-width: 100%; max-height: 450px"
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
};
</script>
