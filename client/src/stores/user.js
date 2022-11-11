import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from 'axios'
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export const useUserStore = defineStore("user", {
  state: () => ({
    baseUrl: 'https://server-database-mongo.herokuapp.com/',
    // baseUrl: "http://localhost:3000/",
    isLogin: false,
    user: {},
    weather: {},
    myRents: {}
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
        Toast.fire({
          icon: 'success',
          title: 'Register success. Please login'
        })
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: 'Error. Please check your input'
        })
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
        Toast.fire({
          icon: 'success',
          title: 'Logged in'
        })
      } catch (error) {
        console.log(error)
        Toast.fire({
          icon: 'error',
          title: 'Email/password is wrong'
        })
      }
    },

    checkAccessToken() {
      this.fetchWeather()
      if(localStorage.access_token) {
        this.isLogin = true
      } else {
        this.isLogin = false
      }
    },

    async userDetail() {
      try {
        const { data } = await axios({
          url: this.baseUrl + 'mydetail',
          method: 'get',
          headers: {
            access_token: localStorage.access_token
          }
        })
        this.user = data
      } catch (error) {
        console.log(error)
      }
    },

      async fetchWeather() {
        try {
          const { data } = await axios({
            url: 'https://api.weatherbit.io/v2.0/current?key=10f7cd6ec99d4f9684a55664eef9bf41&lat=38.123&lon=-78.543&city=Jakarta&country=ID',
            method: 'get'
          })

          this.weather = data.data[0]
        } catch (error) {
          console.log(error)
        }
      },

      async fetchMyRents() {
        try {
          const { data } = await axios({
            url: this.baseUrl + 'myrent',
            method: 'get',
            headers: {
              access_token: localStorage.access_token
            }
          })

          this.myRents = data
        } catch (error) {
          console.log(error)
        }
      },

      async reviewHandler(id, { rating, msg }) {
        try {
          await axios({
            url: this.baseUrl + `vehicles/review/${id}`,
            method: "put",
            headers: {
              access_token: localStorage.access_token
            },
            data: {
              rating, msg
            }
          })
        } catch (error) {
          console.log(error)
        }
      }


  },
});