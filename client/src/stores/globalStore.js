import axios from "axios";
import { defineStore } from "pinia";
import Swal from "sweetalert2";

export const useGlobalStore = defineStore("store", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    isLogin: false,
    products: [],
    cart: [],
    categories: [],
    product: {},
    currentPage: 0,
    totalPages: 0,
    totalItems: 0,
    id: "",
    provinces: [],
    cities: [],
    histories: [],
    shippingCost: 0,
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

    async register(payload) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/public/register",
          method: "post",
          data: payload,
        });
        this.successAlert("success to register");
        this.router.push("/login");
      } catch (err) {
        this.errorAlert(err.response.data.message);
      }
    },

    async login(payload) {
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseUrl + "/public/login",
          data: payload,
        });
        const access_token = data.access_token;
        localStorage.setItem("access_token", access_token);
        this.successAlert("Success Login");
        this.isLogin = true;
        this.getProducts();
        this.router.push("/");
      } catch (err) {
        this.errorAlert(err.response.data.message);
      }
    },

    async googleSignIn(payload) {
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseUrl + "/public/login-google",
          headers: {
            google_token: payload.credential,
          },
        });
        const access_token = data.access_token;
        localStorage.setItem("access_token", access_token);
        this.successAlert("Success Login");
        this.isLogin = true;
        this.getProducts();
        this.router.push("/");
      } catch (err) {
        this.errorAlert(err.response.data.message);
      }
    },

    async getHistories() {
      try {
        const { data } = await axios({
          method: "get",
          url: this.baseUrl + "/histories",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.histories = data;
      } catch (err) {
        this.errorAlert(err);
      }
    },
    async getProducts() {
      try {
        let productUrl = "/public/products";

        const { data } = await axios({
          method: "get",
          url: this.baseUrl + productUrl,
        });
        this.products = data;
      } catch (err) {
        this.errorAlert(err);
      }
    },

    async getProduct(id) {
      try {
        const { data } = await axios({
          method: "get",
          url: this.baseUrl + `/public/products/${id}`,
        });
        this.product = data;
      } catch (err) {
        this.errorAlert(err);
      }
    },

    async getProvince() {
      try {
        const { data } = await axios({
          method: "get",
          url: this.baseUrl + "/shipping-cost/province",
        });
        this.provinces = data;
      } catch (err) {
        this.errorAlert(err.response.data.message);
      }
    },
    async getCity(id) {
      try {
        const { data } = await axios({
          method: "get",
          url: this.baseUrl + `/shipping-cost/city/${id}`,
        });
        this.cities = data;
      } catch (err) {
        this.errorAlert(err.response.data.message);
      }
    },
    async getCost(payload) {
      try {
        const { destination, weight } = payload;
        const { data } = await axios({
          method: "post",
          url:
            this.baseUrl +
            `/shipping-cost/cost?destination=${destination}&weight=${weight}`,
        });
        this.shippingCost = data.cost;
      } catch (err) {
        this.errorAlert(err.response.data.message);
      }
    },

    async paymentUpdate(id, result) {
      try {
        await axios({
          method: "put",
          url: this.baseUrl + `/payment_update/${id}`,
          data: {
            status: "done",
          },
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.successAlert(result.message);
        this.router.push("/histories");
      } catch (err) {
        this.errorAlert(err.response.data.message);
      }
    },

    async payNow(payload) {
      try {
        const paymentUpdate = this.paymentUpdate;
        const {
          address,
          cityId,
          provinceId,
          shippingCost,
          productId,
          totalPrice,
        } = payload;
        const { data } = await axios({
          method: "post",
          url: this.baseUrl + "/payment",
          data: {
            address,
            cityId,
            provinceId,
            shippingCost,
            productId,
            totalPrice,
          },
          headers: {
            access_token: localStorage.access_token,
          },
        });
        // console.log(data.token);
        window.snap.pay(data.token, {
          onSuccess: async function (result) {
            console.log(result);
            paymentUpdate(data.token, result);
          },
        });
      } catch (error) {
        this.errorAlert(error);
      }
    },
  },
});
