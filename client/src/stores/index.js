import { defineStore } from "pinia";
import axios from "axios";

export const useIndexStore = defineStore("index", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    isLogin: false,
    products: [],
    carts: [],
  }),
  actions: {
    async fetchProducts() {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/products",
          method: "get",
        });
        this.products = data;
      } catch (err) {
        console.log(err);
      }
    },

    async signUpHandler(value) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/register",
          method: "post",
          data: {
            firstName: value.firstName,
            lastName: value.lastName,
            email: value.email,
            password: value.password,
            phoneNumber: value.phoneNumber,
          },
        });
        this.router.push("/sign-in");
        this.registerAlert();
      } catch (err) {
        console.log(err);
        this.globalAlert("error", "Please check:", `${err.data.message}`);
      }
    },

    async signInHandler(value) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/login",
          method: "post",
          data: {
            email: value.email,
            password: value.password,
          },
        });
        localStorage.setItem("access_token", data.access_token);
        if (localStorage.access_token) {
          this.isLogin = true;
          this.router.push("/");
          this.loginAlert();
        }
      } catch (err) {
        console.log(err);
        this.globalAlert(
          "error",
          "Please check:",
          `${(err.data.message = "Invalid Email / Password !!")}`
        );
      }
    },

    async addToCartHandler(id) {
      try {
        console.log("2");
        const { data } = await axios({
          url: this.baseUrl + "/carts/" + id,
          method: "post",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        console.log("3");
        this.carts.push(data);
        console.log("4");
        // this.router.push("/cart");
      } catch (error) {
        console.log("5");
        console.log(error);
      }
    },

    // Sweet Alert
    async registerAlert() {
      const Toast = await Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: "success",
        title: "Registered successfully",
      });
    },

    async loginAlert() {
      const Toast = await Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.addEventListener("mouseenter", Swal.stopTimer);
          toast.addEventListener("mouseleave", Swal.resumeTimer);
        },
      });
      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });
    },

    async globalAlert(icon, title, text) {
      let result = {};
      if (icon) {
        result.icon = icon;
      }
      if (title) {
        result.title = title;
      }
      if (text) {
        result.text = text;
      }
      await Swal.fire(result);
    },
  },
});
