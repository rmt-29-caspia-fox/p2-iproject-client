<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useIndexStore } from "@/stores/index";
import CartData from "../components/CartData.vue";

export default {
  components: {
    CartData,
  },
  computed: {
    ...mapState(useIndexStore, [
      "carts",
      "isCartEmpty",
      "firstName",
      "lastName",
    ]),
    ...mapWritableState(useIndexStore, ["prc"]),
  },
  created() {
    this.fetchCarts();
    this.firstName;
    this.lastName;
  },
  methods: {
    ...mapActions(useIndexStore, ["fetchCarts", "payment"]),
    convertedPrice: function (number) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(number);
    },
    paymentButton() {
      this.payment();
    },
  },
};
</script>

<template>
  <!-- menampilkan semua product yang sudah di add ke cart dengan display gambar, nama, harga, dan jumlah yang ingin di beli ada increment dan decrement serta delete, ada tombol payment dan redirect ke payment -->
  <div class="container">
    <div
      class="row d-flex justify-content-center"
      style="
        padding-left: 3%;
        padding-right: 3%;
        margin-top: 10%;
        margin-bottom: 3%;
      "
    >
      <div class="col-12 text-center">
        <h3>{{ firstName }} {{ lastName }}'s Cart</h3>
      </div>
    </div>
    <div class="container" v-if="isCartEmpty">
      <div
        class="row"
        style="padding-left: 3%; padding-right: 3%; margin-bottom: 3%"
      >
        <table class="table table-bordered">
          <thead>
            <tr class="align-middle text-center">
              <th style="width: 5%">No.</th>
              <th style="width: 20%">Image</th>
              <th style="width: 30%">Name</th>
              <th style="width: 15%">Quantity</th>
              <th style="width: 25%">Price</th>
              <th style="width: 5%">Remove</th>
            </tr>
          </thead>
          <tbody>
            <CartData
              v-for="(cart, index) in carts"
              :key="cart.id"
              :cart="cart"
              :number="index"
            />
          </tbody>
        </table>
        <br />
      </div>
      <div class="row">
        <div class="col d-flex justify-content-center text-center">
          <div>
            <h3>Total Price: {{ convertedPrice(prc) }}</h3>
            <br />
            <button @click="paymentButton" type="button" class="btn btn-lazpiz">
              Confirm Payment
            </button>
          </div>
        </div>
      </div>
    </div>
    <div class="container" v-if="!isCartEmpty">
      <div
        class="row"
        style="padding-left: 3%; padding-right: 3%; margin-bottom: 3%"
      >
        <div class="col-12 text-center">
          <img
            src="../assets/CartEmpty.png"
            alt="Empty Cart"
            style="height: 200px"
          />
          <br /><br />
          <h5 style="color: #f6953e">
            Your cart is still empty, let's browse again
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>
