import axios from 'axios'
import { defineStore } from 'pinia'

export const useIndexStore = defineStore("index", {
  state: () => ({
    baseUrl: `http://localhost:3000`,
    isLogin: false,
    news: [],
    tables : []
  }),

  actions: {
    async loginHandler(dataLogin) {
      try {
        const {data} = await axios({
          url: `${this.baseUrl}/login`,
          method: 'post',
          data: {
            email: dataLogin.email,
            password: dataLogin.password
          }
        })
        localStorage.setItem('access_token', data.access_token)
        this.isLogin = true
        this.fetchNews()
        this.fetchTable()
        this.router.push('/')
      } catch (err) {
        console.log(err)
      }
    },
    async registerHandler(dataRegister) {
      try {
        const {data} = await axios({
          url: `${this.baseUrl}/register`,
          method: 'post',
          data: { 
            username: dataRegister.username,
            email: dataRegister.email,
            password: dataRegister.password
          }
        })
        this.router.push('/login')
      } catch (err) {
        console.log(err)
      }
    },
    async fetchNews() {
      try {
        const {data} = await axios ({
          url: `${this.baseUrl}/pub/news`,
          method: `get`,
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.news = data.articles
      } catch (err) {
        console.log(err)
      }
    },
    async fetchTable() {
      try {
        const {data} = await axios({
          url: `${this.baseUrl}/pub/country`,
          method: `get`,
            headers: {
              access_token: localStorage.getItem('access_token')
            }
        })
        this.tables = data
      } catch (err) {
        console.log(err)
      }
    }
  },
});

