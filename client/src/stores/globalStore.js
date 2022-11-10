import axios from "axios";
import { defineStore } from "pinia";
import Swal from "sweetalert2";

export const useGlobalStore = defineStore("store", {
  state: () => ({
    baseUrl: "https://caspia-i-project.herokuapp.com",
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
    provinceId: "",
    cities: [],
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

    async getProducts() {
      try {
        let productUrl = "/public/products";

        const { data } = await axios({
          method: "get",
          url: this.baseUrl + productUrl,
        });
        this.products = data;
      } catch (err) {
        this.errorAlert(err.response.data.message);
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
        this.errorAlert(err.response.data.message);
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
          url: this.baseUrl + `/city/:${id}`,
        });
        this.cities = data;
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
