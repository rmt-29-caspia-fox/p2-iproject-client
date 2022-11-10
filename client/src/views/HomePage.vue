<script>
import CardItem from "../components/CardItem.vue";
import { mapWritableState, mapActions } from "pinia";
import { useGlobalStore } from "../stores/globalStore";
export default {
  components: {
    CardItem,
  },
  computed: {
    ...mapWritableState(useGlobalStore, ["products"]),
  },
  methods: {
    ...mapActions(useGlobalStore, ["getProducts"]),
  },
  created() {
    this.getProducts();
  },
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>Product List</h2>
        <hr />
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-6">
        <div class="row"></div>
      </div>
      <div class="col-6">
        <form>
          <div class="input-group">
            <input
              type="text"
              class="form-control"
              placeholder="Product's name"
              aria-label="Product's name"
            />
            <button class="btn btn-secondary" type="submit">
              <i class="fa fa-search"></i> Search
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="row gy-3 d-flex justify-content-center">
      <!-- <h1>rtest</h1> -->
      <CardItem
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
    <div class="row mt-3">
      <div class="col-12 d-flex justify-content-center">
        <nav aria-label="Page navigation">
          <!-- paginate -->
        </nav>
      </div>
    </div>
  </div>
</template>
