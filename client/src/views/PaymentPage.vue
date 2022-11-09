<script>
import { mapActions } from "pinia";
import { useGlobalStore } from "../stores/globalStore";
export default {
  components: {},
  computed: {},
  methods: {
    ...mapActions(useGlobalStore, ["payNow"]),
    paymentHandler() {
      this.payNow();
    },
  },
  created() {},
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>Payment</h2>
        <hr />
      </div>
    </div>
    <div class="row gy-3 d-flex justify-content-center">
      <!-- <h1>rtest</h1> -->
      <button @click.prevent="paymentHandler" class="btn btn-lg btn-warning">
        Pay Now
      </button>
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
