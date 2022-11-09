<template>
  <div
    class="card mb-3 ms-3 mt-4"
    style="width: 300px; max-height: 300px"
  >
    <div class="d-flex">
      <div class="ms-0">
        <img
          v-if="bookData.imageUrl"
          :src="bookData.imageUrl"
          class="img-fluid rounded-start ms-0"
          alt="..."
          
        />
      </div>
      <div class="me-0">
        <div class="card-body pe-0">
          <h5 class="card-title">{{ bookData.title }}</h5>
          <p class="card-text" v-if="bookData.author">
            <small class="text-muted fw-bold">by {{ bookData.author }}</small>
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
  },
};
</script>
<style scoped>
  img {
    max-height: 250px;
  }
  .card-title {
    font-size: medium;
  }
</style>
