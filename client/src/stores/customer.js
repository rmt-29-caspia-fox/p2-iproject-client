import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const useCustomerStore = defineStore("customer", {
  state: () => ({
    isLogin: false,
    baseUrl: "https://reccomanga.herokuapp.com",
  }),
  actions: {
    submitLogin(payload) {
      console.log("masuk store");
      return axios({
        method: "post",
        url: this.baseUrl + "/pub/login",
        data: payload,
      });
    },
    async submitLogout() {
      localStorage.removeItem("access_token");
      this.isLogin = false;
      this.router.push("/login");
      let timerInterval;
      Swal.fire({
        icon: "success",
        title: "You're now logged out!",
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading();
        },
        willClose: () => {
          clearInterval(timerInterval);
        },
      });
    },
    submitRegister(payload) {
      // console.log("masuk store");
      return axios({
        method: "post",
        url: this.baseUrl + "/pub/register",
        data: payload,
      });
    },
    async googleLogin(response) {
      // console.log("masuk", response, "<<< datalogin");
      try {
        const data = await axios({
          method: "post",
          url: this.baseUrl + "/pub/google-login",
          headers: {
            google_token: response.credential,
          },
        });
        // console.log(data, "<<< data");
        const { access_token, username } = data.data;
        localStorage.setItem("access_token", access_token);
        this.isLogin = true;

        this.router.push("/");
        let timerInterval;
        Swal.fire({
          icon: "success",
          title: "Successfully logging in!",
          timer: 3000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
          },
          willClose: () => {
            clearInterval(timerInterval);
          },
        });
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: error.response.data.message,
        });
      }
    },
  },
});
