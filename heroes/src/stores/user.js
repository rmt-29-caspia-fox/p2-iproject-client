import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    baseUrl: "https://i-project-naufal.herokuapp.com",
    isLogin: false,
    location: [],
    user:{}
  }),
  actions: {
    async register(payload) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/users/register",
          method: "post",
          data: payload,
        });
        const loginForm = payload;
        this.login(loginForm);
      } catch (err) {
        console.log(err);
      }
    },

    async login(payload) {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/users/login",
          method: "post",
          data: payload,
        });
        localStorage.setItem("access_token", data.access_token);
        this.isLogin = true;
        this.user = {latitude : data.latitude, longitude: data.longitude}
        this.router.push("/");
      } catch (err) {
        console.log(err);
      }
    },

    logout() {
      localStorage.clear();
      this.router.push("/");
    },

    async getAllUser() {
      try {
        const { data } = await axios({
          url: this.baseUrl + "/users/all",
          method: "get",
        });
        this.location = data;
      } catch (err) {
        console.log(err);
      }
    },

    async handleCredentialResponse(response) {
      try {
        // console.log(response, 'ini respnse')
        const { data } = await axios({
          url: this.baseUrl + '/users/sign-in',
          method: 'post',
          headers: {
            google_token: response.credential,
          },
        });
        localStorage.setItem('access_token', data.access_token);
        console.log('masuk')
        this.isLogin = true
        this.router.push('/')
      } catch (err) {
        console.log(err);
      }
    },
  },
});
