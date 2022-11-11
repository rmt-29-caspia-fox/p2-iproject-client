<script>
import { mapState } from "pinia";
import { useIndexStore } from "../stores/index";
import HistoryData from "../components/HistoryData.vue";

export default {
  components: {
    HistoryData,
  },
  computed: {
    ...mapState(useIndexStore, [
      "firstName",
      "lastName",
      "email",
      "avatar",
      "carts",
    ]),
  },
};
</script>

<template>
  <div class="container">
    <div
      class="row"
      style="
        padding-left: 3%;
        padding-right: 3%;
        margin-top: 10%;
        margin-bottom: 3%;
      "
    >
      <div class="col-5 d-flex justify-content-end">
        <img
          class="rounded-circle"
          style="height: 140px"
          alt=""
          :src="'data:image/jpeg;base64,' + avatar"
        />
      </div>
      <div class="col-7">
        <div class="row">
          <div class="col-5 text-center">
            <h3>Sign In User</h3>
          </div>
        </div>
        <br />
        <div class="row">
          <div class="col-1"></div>
          <div class="col-1">
            <div>Name</div>
            <br />
            <div>Email</div>
          </div>
          <div class="col-4">
            <div>: {{ firstName }} {{ lastName }}</div>
            <br />
            <div>: {{ email }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container" style="padding-left: 50px; padding-right: 50px">
    <div class="row">
      <div class="col">
        <h3>Purchase History</h3>
      </div>
    </div>
    <div class="row" style="padding-left: 15px; padding-right: 15px">
      <table class="table table-bordered">
        <thead>
          <tr class="align-middle text-center">
            <th style="width: 25%">Purchased Date</th>
            <th style="width: 20%">Image</th>
            <th style="width: 25%">Name</th>
            <th style="width: 10%">Quantity</th>
            <th style="width: 20%">Total Price</th>
          </tr>
        </thead>
        <tbody>
          <HistoryData v-for="cart in carts" :key="cart.id" :cart="cart" />
        </tbody>
      </table>
    </div>
  </div>
</template>
