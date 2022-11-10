<script>
import { mapState } from "pinia";
import ProductCard from "../components/ProductCard.vue";
import { useIndexStore } from "@/stores/index";

export default {
  components: {
    ProductCard,
  },
  computed: {
    ...mapState(useIndexStore, ["fetchProducts", "products"]),
  },
  created() {
    this.fetchProducts();
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
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>
