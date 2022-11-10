<script>
export default {
  props: ["cart"],
  methods: {
    convertedPrice: function (number) {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(number);
    },
  },
};
</script>

<template>
  <tr class="align-middle text-center">
    <td>{{ this.cart.createdAt }}</td>
    <td>
      <img style="height: 125px" :src="cart.Product?.imageUrl" alt="" />
    </td>
    <td>{{ cart.Product?.name }}</td>
    <td>1</td>
    <td>{{ convertedPrice(cart.Product?.price) }}</td>
  </tr>
</template>
