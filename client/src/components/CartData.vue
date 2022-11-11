<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useIndexStore } from "@/stores/index";

export default {
  data() {
    return {
      quantity: 1,
      price: 0,
    };
  },
  props: ["cart", "number"],
  computed: {
    ...mapWritableState(useIndexStore, ["prc"]),
    calculate() {
      return this.quantity * this.price;
    },
  },
  methods: {
    ...mapActions(useIndexStore, ["deleteFromCartAlert"]),
    convertedPrice: function (number) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(number);
    },
    increment() {
      this.quantity++;
      this.prc = this.prc + this.price;
    },
    decrement() {
      if (this.quantity >= 2) {
        this.quantity--;
        this.prc = this.prc - this.price;
      } else {
        this.quantity = 1;
      }
    },
    total() {
      this.prc = this.prc + this.price;
    },
    deleteButton(id) {
      this.deleteFromCartAlert(id);
    },
  },
  created() {
    this.price = this.cart.Product.price;
    this.total();
  },
};
</script>

<template>
  <tr class="align-middle text-center">
    <td>{{ number + 1 }}</td>
    <td>
      <img
        :src="cart.Product?.imageUrl"
        alt="Product Image"
        style="height: 125px"
      />
    </td>
    <td>{{ cart.Product?.name }}</td>
    <td>
      <div class="row">
        <div class="col-4" style="padding-left: 40px">
          <a href="" @click.prevent="decrement()" style="color: #f6953e"
            ><i class="fa fa-minus"></i
          ></a>
        </div>
        <div class="col-4">
          {{ quantity }}
        </div>
        <div class="col-4" style="padding-right: 40px">
          <a href="" @click.prevent="increment()" style="color: #f6953e"
            ><i class="fa fa-plus"></i
          ></a>
        </div>
      </div>
    </td>
    <td>{{ convertedPrice(calculate) }}</td>
    <td>
      <a href="" style="color: #f6953e" @click.prevent="deleteButton(cart.id)"
        ><i class="fa fa-trash"></i
      ></a>
    </td>
  </tr>
</template>
