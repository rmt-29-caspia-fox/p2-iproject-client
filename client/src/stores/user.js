import { defineStore } from 'pinia'
import axios from 'axios'

export const useUserStore = defineStore('user', {
  state: () => (
    {
      baseUrl: "http://localhost:3000",
      username: "",
      isLogin: false
    }
  ),
  getters: {

  },
  actions: {
    async fetchProfile() {
      if (localStorage.access_token) {
        try {
          const { data } = await axios({
            method: "get",
            url: this.baseUrl + '/profile',
            headers: { access_token: localStorage.access_token }
          })
          this.username = data.user.username
        } catch (err) {
          console.log(err);
        }
      }
    },
    async inputLogin(email, password) {
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseUrl + '/login',
          data: {
            email: email,
            password: password
          }
        })
        localStorage.setItem('access_token', data.access_token);
        this.router.push('/')
      } catch (err) {
        // Swal.fire({
        //   icon: 'error',
        //   title: err.response.data.error,
        //   text: err.response.data.message
        // })
      }
    },
    async googleLogin(response) {
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseUrl + "/google-sign-in",
          headers: {
            google_token: response.code
          }
        })
        localStorage.setItem("access_token", data.access_token)
        this.router.push('/')
      } catch (err) {
        console.log(err);
        // Swal.fire({
        //   icon: 'error',
        //   title: 'Something went wrong!',
        //   text: 'Contact us!'
        // })
      }
    },
    async discordLogin(code) {
      try {
        const { data } = await axios({
          method: "get",
          url: this.baseUrl + '/discord',
          params: {
            code: code
          }
        })
        console.log(data);
      } catch (err) {
        console.log(err);
      }
    },
    async inputRegister(payload) {
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseUrl + '/register',
          data: payload
        })
        this.router.push('/login')
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: err.response.data.message,
          text: err.response.data.error
        })
      }
    },
    logout() {
      localStorage.clear()
      this.router.push('/');
    }
  },
})
