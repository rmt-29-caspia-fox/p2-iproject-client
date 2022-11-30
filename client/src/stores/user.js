import { defineStore } from "pinia";
import axios from "axios";
import FormData from "form-data";

export const useUserStore = defineStore("user", {
  state: () => ({
    baseUrl:  "http://localhost:3000",  //"https://matching-u.herokuapp.com",
    username: "",
    userId: {
      id: "",
    },
    proP: "",
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
        this.userId.id = data.id;
        localStorage.setItem("access_token", data.access_token);
        this.router.push("/");
      } catch (err) {
        console.log(err);
      }
    },
    async googleHandler(response) {
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseUrl + "/google-sign-in",
          headers: {
            google_token: response.credential,
          },
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
    async changePP(payload) {
      try {
        let form = new FormData();
        form.append("profilePic", payload.profilePic);
        console.log("ini payload", payload.profilePic);
        const { data } = await axios({
          method: "put",
          url: this.baseUrl + `/profile/${payload.id}`,
          headers: {
            "Content-Type": "multipart/form-data",
            access_token: localStorage.access_token,
          },
          data: form
        });
        this.getProfPic(payload.id);
      } catch (err) {
        console.log(err);
      }
    },
    async getProfPic(id) {
      try {
        const { data } = await axios({
          method: "get",
          url: this.baseUrl + `/profile/${id}`,
          headers: {
            access_token: localStorage.access_token,
          },
        });
        this.proP = data.profilePic;
      } catch (err) {
        console.log(err);
      }
    },
    logout() {
      localStorage.clear();
      this.router.push("/login");
    },
  },
});
