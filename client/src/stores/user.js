import { defineStore } from "pinia";
import axios from 'axios'


const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export const useUserStore = defineStore("user", {
  state: () => ({
    isLogin: false,
    baseUrl: "http://localhost:3000",
  }),
  actions: {
    async submitLogin(payload){
      try {
        const { data } = await axios({
          url: this.baseUrl + '/users/login',
          method: 'post',
          data : {
            email: payload.email,
            password: payload.password
          }
        })
        localStorage.setItem('access_token', data.access_token)
        this.isLogin = true
        this.router.push('/') 
        Toast.fire({
          icon: 'success',
          title: 'Succes login'
        })
      } catch (err) {
        Toast.fire({
          icon: 'error',
          title: err.response.data.message
        })
      }
    },

    logoutButton(){
      localStorage.clear()
      this.isLogin = false
      this.router.push('/')
    },


    async submitRegister(payload){
      try {
        const {data} = await axios({
          url: this.baseUrl + '/users/register',
          method: 'post',
          data: {
            username: payload.username,
            email: payload.email,
            password: payload.password,
            phoneNumber: payload.phoneNumber,
            address: payload.address
          }
        })
        const login = {
          email: payload.email,
          password: payload.password
        }
        this.submitLogin(login)
      } catch (err) {
        Toast.fire({
          icon: 'error',
          title: err.response.data.message
        })
      }
    },
  },
});
