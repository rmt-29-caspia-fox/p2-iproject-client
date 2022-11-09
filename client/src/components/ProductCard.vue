<script>
import { mapActions } from "pinia";
import { useIndexStore } from "@/stores/index";

export default {
  props: ["product"],
  methods: {
    convertedPrice: function (number) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(number);
    },
    ...mapActions(useIndexStore, ["addToCartHandler", "fetchProducts"]),
    addToCartButton(id) {
      console.log("1");
      // this.addToCartHandler(id);
      this.fetchProducts();
    },
  },
};
</script>

<template>
  <!-- ada informasi product seperti image, nama, harga, kalo di klik, redirect ke halaman detail + ada tombol add to cart -->
  <div class="col-3">
    <div class="card" style="height: 100%">
      <img :src="product.imageUrl" class="card-img-top" alt="food image" />
      <div class="card-body" style="height: 125px">
        <h5
          class="card-title fw-bolder"
          style="margin-bottom: 7%; color: #f6953e"
        >
          {{ product.name }}
        </h5>
        <p class="card-text">
          {{ product.description }}
        </p>
      </div>
      <div class="card-body">
        <h5
          class="card-title fw-bolder d-flex justify-content-center"
          style="color: #f6953e"
        >
          {{ convertedPrice(product.price) }}
        </h5>
      </div>
      <div class="card-body">
        <a
          @click.prevent="addToCartButton(product.id)"
          href="#"
          class="btn btn-lazpiz d-flex justify-content-center"
          >Add to Cart</a
        >
      </div>
    </div>
  </div>
</template>
