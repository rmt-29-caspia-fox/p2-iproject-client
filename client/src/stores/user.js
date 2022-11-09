import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    baseUrl: "http://localhost:3000",
  }),
  actions: {
    async login(payload) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/login",
          method: "post",
          data: payload,
        });

        localStorage.setItem("access_token", data.access_token);
        this.router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
    async register(payload) {
      try {
        await axios({
          method: "post",
          url: this.baseUrl + "/register",
          data: payload,
        });
        this.router.push("/login");
      } catch (err) {
        console.log(err);
      }
    },
    logoutHandler() {
      localStorage.removeItem("access_token");
      this.router.push("/login");
    },
  },
});
