<script>
export default {
  props: ["product"],
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
      <div class="d-flex justify-content-between align-items-center p-3">
        <a href="" class="btn btn-secondary"> Detail </a>
        <a class="btn btn-danger">
          <i class="fa-solid fa-1.5x fa-cart-shopping"> </i> Add to Cart</a
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
