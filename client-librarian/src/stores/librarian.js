import { defineStore } from "pinia";
import axios from "axios";

const baseUrl = "http://localhost:3000/librarians/";

const useLibrarianStore = defineStore("librarian", {
  state: () => ({
    isLogin: false,
  }),
  getters: {},
  actions: {
    loginHandler() {
      if (localStorage.access_token) {
        this.isLogin = true;
        this.router.push("/");
      } else {
        this.isLogin = false;
        this.router.push("/login");
      }
    },
    async login(loginForm) {
      try {
        const { data } = await axios({
          method: "post",
          url: baseUrl + "/login",
          data: loginForm,
        });
        localStorage.setItem("access_token", data.access_token);
        this.loginHandler();
        this.router.push("/");
      } catch (error) {
        console.log(error);
      }
    },
    async register(registerForm) {
      try {
        registerForm.role = "Admin";
        console.log(registerForm);
        await axios({
          method: "POST",
          url: baseUrl + "/register",
          data: registerForm,
        });
        this.router.push("/login");
      } catch (error) {
        console.log(error);
      }
    },
  },
});

export default useLibrarianStore;
