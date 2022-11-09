<template>
  <div class="d-flex">
    <div class="card mb-3" style="width: 250px; max-height: 300px">
      <div class="card-body">
        <h5 class="card-title">{{ gutenbergData.title }}</h5>
        <p class="card-text" v-if="gutenbergData.authors">
          <small class="text-muted fw-bold">by {{ this.authorData }}</small>
        </p>
        <p class="card-text" v-if="gutenbergData.languages">
          <small class="text-muted"
            >languages : {{ gutenbergData.languages[0] }}</small
          >
        </p>
        <div class="d-flex">
          <a
            :href="gutenbergData.formats['text/html; charset=utf-8']"
            target="_blank"
            class="btn mx-3"
            >PREVIEW</a
          >
          <a
            :href="gutenbergData.formats['application/epub+zip']"
            target="_blank"
            class="mx-3"
            >DOWNLOAD</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    gutenbergData: Object,
  },
  data() {
    return {
      authorData: "",
    };
  },
  methods: {
    authorformatter(authors) {
      let authorName = "";
      let splitted = [];
      console.log(authors);
      if (Array.isArray(authors)) {
        splitted = authors[0].name.split(",");
      } else {
        splitted = authors.name.split(",");
      }
      // let nameSplitted = authors[0].name.split(",");
      authorName = splitted[1] + " " + splitted[0];
      return authorName;
    },
  },
  beforeMount() {
    console.log(this.gutenbergData);
    if (this.gutenbergData.authors && this.gutenbergData.authors.length !== 0) {
      this.authorData = this.authorformatter(this.gutenbergData.authors);
    }
  },
};
</script>

<style scoped>
a:hover {
  cursor: pointer;
}
</style>
