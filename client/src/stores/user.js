import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    baseUrl: "https://matching-u.herokuapp.com",
    username: "",
  }),
  actions: {
    async login(payload) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/login",
          method: "post",
          data: payload,
        });
        this.username = data.username;
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
    // async changePP() {
    //   try {
    //     const { data } = await axios({
    //       method: "post",
    //       url: "https://upload.imagekit.io/api/v1/files/upload",
    //       data: {
    //         publicKey: "public_dV32LkjmtFPBB3QUri2gQ3M2Ilc=",

    //       },
    //       headers: {
    //         Authorization: "private_QbmZScRY8vkb6ai1JXcfKqtAkTA="
    //       } 
    //     });
    //   } catch (err) {}
    // },
    async changePP() {
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseUrl + "/register",
          data: {
            publicKey: "public_dV32LkjmtFPBB3QUri2gQ3M2Ilc=",

          },
          headers: {
            Authorization: "private_QbmZScRY8vkb6ai1JXcfKqtAkTA="
          } 
        });
      } catch (err) {}
    },
    logout() {
      localStorage.removeItem("access_token");
      this.router.push("/login");
    },
  },
});
