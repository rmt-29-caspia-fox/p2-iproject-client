<template>
  <div class="card mb-3 ms-3 mt-4" style="width: 300px; max-height: 300px">
    <div class="d-flex">
      <div class="ms-0">
        <img
          v-if="bookData.imageUrl"
          :src="bookData.imageUrl"
          class="img-fluid rounded-start ms-0"
          alt="..."
        />
      </div>
      <div class="me-3">
        <div class="card-body pe-0">
          <h5 class="card-title">{{ bookData.title }}</h5>
          <p class="card-text" v-if="bookData.author">
            <small class="text-muted fw-bold">by {{ bookData.author }}</small>
          </p>
          <p v-if="bookData.shortDesc">
            {{ bookData.shortDesc }}
          </p>
        </div>
        <div class="text-center">
          <!-- <button @click.prevent="emitEditFav">Edit Review</button> -->
          <button @click.prevent="emitDel">Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "pinia";
import { useCounterStore } from "@/stores/counter";

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
  methods: {
    ...mapActions(useCounterStore, ["editFavChg","delFav"]),
    emitEditFav() {
      this.editFavChg(this.bookData);
    },
    emitDel(){
      this.delFav(this.bookData.id)
    }
  },
  beforeMount() {},
};
</script>
<style scoped>
img {
  max-height: 250px;
}
.card-title {
  font-size: medium;
}
button {
  text-decoration: none;
  color: black;
  padding: 4px 10px;
  font-size: smaller;
  border-radius: 4px;
  border: 1px solid green;
}
button:hover {
  cursor: pointer;
  color: aliceblue;
  background-color: rgb(58, 146, 70);
}
</style>
