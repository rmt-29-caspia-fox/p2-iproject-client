import { defineStore } from "pinia";
import axios from "axios";

export const useIndexStore = defineStore("index", {
  state: () => ({
    baseUrl: "https://p2-iproject-server-production.up.railway.app",
    // baseUrl: "http://localhost:3000",
    isLogin: false,
    isCartEmpty: false,
    products: [],
    carts: [],
    prc: 0,
    firstName: "",
    lastName: "",
    email: "",
    avatar: "",
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
        console.log(err.data);
      }
    },

    async fetchCarts() {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/carts",
          method: "get",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.prc = 0;
        this.carts = data;
        this.isCartEmpty = true;
      } catch (error) {
        console.log(error.data);
        this.isCartEmpty = false;
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
        this.globalAlert(
          "error",
          "Please check:",
          `${err.response.data.message}`
        );
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
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.email = data.email;
        this.avatar = data.avatar;
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
          `${(err.response.data.message = "Invalid Email / Password !!")}`
        );
      }
    },

    async googleLogin(response) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/google-sign-in",
          method: "post",
          headers: {
            google_token: response.credential,
          },
        });
        localStorage.setItem("access_token", data.access_token);
        console.log(">>>>>>", data);
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.email = data.email;
        this.avatar = data.avatar;
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
          `${(err.data.message = "Google Sign In Failed !!")}`
        );
      }
    },

    async payment() {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/midtrans-transaction-token",
          method: "post",
          data: {
            firstName: this.firstName,
            lastName: this.lastName,
            price: this.prc,
          },
          headers: {
            access_token: localStorage.access_token,
          },
        });
        const cb = this.paymentFollowUp;
        window.snap.pay(data.transaction.token, {
          onSuccess: function (result) {
            cb();
          },
        });
      } catch (err) {
        console.log(err);
      }
    },

    async paymentFollowUp() {
      this.carts = [];
      console.log("MASUKKKKKKKK");

      this.router.push("/");

      this.paymentAlert();
    },

    signOutHandler() {
      this.logoutAlert();
    },

    prcHandler() {
      this.prc = 0;
      this.router.push("/");
    },

    async addToCartHandler(id) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/carts/" + id,
          method: "post",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.addToCartAlert();
      } catch (error) {
        console.log(error);
        if (error.response.data.message === "Invalid token") {
          this.globalAlert("warning", "Please check:", `Have you signed in?`);
        } else if (
          error.response.data.message === "Product has been added to cart"
        ) {
          this.globalAlert(
            "warning",
            "Please check:",
            `You have added this product to cart`
          );
        }
      }
    },

    async deleteFromCartHandler(id) {
      try {
        await axios({
          url: this.baseUrl + "/carts/" + id,
          method: "delete",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.router.push("/carts");
        this.fetchCarts();
      } catch (error) {
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

    async logoutAlert() {
      await Swal.fire({
        title: "Are you sure?",
        text: "You are logging out...",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#FF3A3A",
        cancelButtonColor: "#E3E3E3",
        confirmButtonText: "Log Out!",
      }).then((result) => {
        if (result.isConfirmed) {
          localStorage.removeItem("access_token");
          this.isLogin = false;
          this.router.push("/");
          this.globalAlert("success", "Success!", "You have been logged out.");
        }
      });
    },

    async addToCartAlert() {
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
        title: "Success adding Product to Cart",
      });
    },

    async deleteFromCartAlert(id) {
      await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#FF3A3A",
        cancelButtonColor: "#E3E3E3",
        confirmButtonText: "REMOVE!",
      }).then((result) => {
        if (result.isConfirmed) {
          this.deleteFromCartHandler(id);
          this.globalAlert(
            "success",
            "Removed!",
            "The Product has been removed."
          );
        }
      });
    },

    async paymentAlert() {
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
        title: "Payment successful",
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
