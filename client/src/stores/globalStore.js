import axios from "axios";
import { defineStore } from "pinia";
import Swal from "sweetalert2";

export const useGlobalStore = defineStore("store", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    isLogin: false,
    isAdmin: false,
    products: [],
    cart: [],
    categories: [],
    product: {},
    currentPage: 0,
    totalPages: 0,
    totalItems: 0,
    id: "",
  }),

  actions: {
    errorAlert(msg) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: msg,
      });
    },
    successAlert(msg) {
      Swal.fire({
        icon: "success",
        title: msg,
        showConfirmButton: false,
        timer: 1000,
      });
    },
    async getProducts() {
      try {
        let productUrl = "/public/products";
        // if (page) {
        //   productUrl = `/public/products?page=${page}`;
        // }
        const { data } = await axios({
          method: "get",
          url: this.baseUrl + productUrl,
        });
        this.products = data;
      } catch (err) {
        this.errorAlert(err.response.data.message);
      }
    },

    async payNow() {
      try {
        const alertPop = this.successAlert;
        const { data } = await axios({
          method: "post",
          url: this.baseUrl + "/public/payment",
        });
        // console.log(data.token);
        window.snap.pay(data.token, {
          onSuccess: function (result) {
            alertPop(result.status_message);
          },
        });
      } catch (error) {
        this.errorAlert(error);
      }
    },
  },
});
