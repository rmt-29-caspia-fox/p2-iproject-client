<script>
export default {
  props: ["product"],
  methods: {
    detailHandler(id) {
      this.$router.push(`/details/${id}`);
    },
  },
};
</script>
<template>
  <div class="col-lg-4 col-md-6 col-sm-12">
    <div class="card h-100">
      <img :src="product.imgUrl" class="card-img-top" alt="..." />
      <div class="card-body">
        <h5 class="card-title">{{ product.name }}</h5>
      </div>
      <div class="px-3">
        <small class="text-muted">start from :</small>
        <p class="card-text">Rp {{ product.price }}</p>
      </div>
      <div class="d-flex justify-content-center align-items-center p-3">
        <a
          @click.prevent="detailHandler(product.id)"
          class="btn btn-outline-secondary"
          >Detail</a
        >
      </div>
    </div>
  </div>
</template>
<style scoped>
a {
  text-decoration: none;
}
</style>
