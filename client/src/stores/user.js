import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

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
        Swal.fire({
          icon: 'error',
          title: err.response.data.error,
          text: err.response.data.message
        })
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
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong!',
          text: 'Contact us!'
        })
      }
    },
    async discordLogin(code) {
      const params = new URLSearchParams();
      params.append('client_id', "1039609972046168114");
      params.append('client_secret', "j2z-l-R-ux7GedG3aCl9jiuOzgc_Hh53");
      params.append('grant_type', 'authorization_code');
      params.append('code', code);
      params.append('redirect_uri', "http://localhost:8000/login");
      try {
        const response = await axios.post('https://discord.com/api/oauth2/token', params)
        let { access_token, token_type } = response.data
        const userResponse = await axios({
          method: "get",
          url: 'https://discord.com/api/users/@me',
          headers: {
            authorization: `${token_type} ${access_token}`
          }
        })
        const { data } = await axios({
          method: "get",
          url: this.baseUrl + '/discord',
          params: {
            username: userResponse.data.username,
            email: userResponse.data.email
          }
        })
        localStorage.setItem('access_token', data.access_token)
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong!',
          text: 'Contact us!'
        })
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
