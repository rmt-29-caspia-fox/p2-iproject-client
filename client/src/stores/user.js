import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from 'axios'

export const useUserStore = defineStore("user", {
  state: () => ({
    // baseUrl: 'https://movie-cms1.herokuapp.com/pub/',
    baseUrl: "http://localhost:3000/",
    isLogin: false,
  }),

  actions: {
    async registerHandler({name, email, password}) {
      try {
        await axios({
          url: this.baseUrl + 'register',
          method: 'post',
          data: {
            name, email, password
          }
        })
        this.router.push('/login')
      } catch (error) {
        console.log(error)
      }
    },

    async loginHandler({email, password}) {
      try {
        const { data } = await axios({
          url: this.baseUrl + 'login',
          method: 'post',
          data: {
            email, password
          }
        })
        localStorage.setItem("access_token", data.access_token)
        this.isLogin = true
        this.router.push('/')
      } catch (error) {
        console.log(error)
      }
    },

    checkAccessToken() {
      if(localStorage.access_token) {
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    }

  },
});