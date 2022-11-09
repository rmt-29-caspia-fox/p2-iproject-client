import { defineStore } from "pinia";
import axios from 'axios'

export const useUserStore = defineStore("user", {
  state: () => ({
    baseUrl: 'http://localhost:3000',
    isLogin: false
  }),
  actions: {
    async register(payload){
      try {
        const {data} = await axios({
          url: this.baseUrl + '/users/register',
          method: 'post',
          data: payload
        })
        const loginForm = {
          email: payload.email,
          password: payload.password
        }
        this.login(loginForm)
      } catch (err) {
        console.log(err);
      }
    },

    async login(payload){
      try {
        const {data} = await axios({
          url: this.baseUrl + '/users/login',
          method: 'post',
          data: payload
        })
        localStorage.setItem('access_token', data.access_token)
        this.isLogin = true
        this.router.push('/')
      } catch (err) {
        console.log(err);
      }
    },

    logout(){
      localStorage.clear()
      this.router.push('/')
    }
  },
});
