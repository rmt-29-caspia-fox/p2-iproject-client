import { defineStore } from "pinia";
import axios from "axios";
import Swal from "sweetalert2";

export const useCustomerStore = defineStore("customer", {
  state: () => ({
    isLogin: false,
    baseUrl: "http://localhost:3000",
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
  },
});
