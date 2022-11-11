<script>
import CardItem from "../components/CardItem.vue";
import { mapState, mapActions } from "pinia";
import { useGlobalStore } from "../stores/globalStore";
export default {
  computed: {
    ...mapState(useGlobalStore, ["histories"]),
  },
  methods: {
    ...mapActions(useGlobalStore, ["getHistories"]),
  },
  created() {
    this.getHistories();
  },
};
</script>
<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h2>History</h2>
        <hr />
      </div>
    </div>
    <div class="row gy-3 d-flex justify-content-center">
      <!-- <h1>rtest</h1> -->
      <div class="col-12">
        <h6 class="text-center" v-if="histories.length === 0">Data kosong</h6>
        <table class="table">
          <thead>
            <th>Purchased Date</th>
            <th>Product Name</th>
            <th>Total Amount</th>
            <th>Shipping Adress</th>
            <th>Status</th>
          </thead>
          <tbody>
            <tr v-for="history in histories">
              <td>{{ history.updatedAt }}</td>
              <td>{{ history.Product.name }}</td>
              <td>{{ history.totalAmount }}</td>
              <td>{{ history.address }}</td>
              <td>{{ history.status }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
