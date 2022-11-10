import { defineStore } from "pinia";
import axios from "axios";

export const useUserStore = defineStore("user", {
  state: () => ({
    baseUrl:  "http://localhost:3000",    //"https://matching-u.herokuapp.com",
    username: "",
    userId:"",
    profile:""
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
        this.userId = data.id
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
        console.log("ini payload",payload.id);
        const { data } = await axios({
          method: "put",
          url: this.baseUrl + `/profile/${payload.id}`,
          headers: {
            access_token : localStorage.access_token
          },
          data: {
            profilePic: payload.profilePic
          }
        });
        this.getProfPic(payload.id)
      } catch (err) {
        console.log(err);
      }
    },
    async getProfPic(id){
      try {
        const {data} = await axios({
          method: "get",
          url: this.baseUrl + `/profile/${id.id}`,
          headers: {
            access_token : localStorage.access_token
          }
        })
        this.profile = data.profilePic
      } catch (err) {
        console.log(err);
      }
    },
    logout() {
      localStorage.removeItem("access_token");
      this.router.push("/login");
    },
  },
});
