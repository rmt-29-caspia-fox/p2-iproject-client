<script>
import ProductCard from "../components/ProductCard.vue";

export default {
  components: {
    ProductCard,
  },
};
</script>

<template>
  <!-- ada Navbar, Pagination, Product Cards yang kalo di klik masuk detail & tombol add to cart -->
  <div class="container">
    <div
      class="row d-flex gy-4 justify-content-between"
      style="
        padding-left: 3%;
        padding-right: 3%;
        margin-top: 8%;
        margin-bottom: 3%;
      "
    >
      <div class="col-3">
        <ProductCard />
      </div>
      <div class="col-3">
        <ProductCard />
      </div>
      <div class="col-3">
        <ProductCard />
      </div>
      <div class="col-3">
        <ProductCard />
      </div>
      <div class="col-3">
        <ProductCard />
      </div>
      <div class="col-3">
        <ProductCard />
      </div>
      <div class="col-3">
        <ProductCard />
      </div>
      <div class="col-3">
        <ProductCard />
      </div>
      <div class="col-3">
        <ProductCard />
      </div>
    </div>
  </div>
</template>
