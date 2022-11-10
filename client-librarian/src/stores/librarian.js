import { defineStore } from 'pinia'
import axios from 'axios'

const useLibrarianStore = defineStore('librarian', {
  state: () => ({
    registerForm: [],
    loginForm: [],
    isLogin: false
  }),
  getters: {
  },
  actions: {
    loginHandler() {
      if (localStorage.access_token) {
        this.isLogin = true
        this.router.push('/')
      } else {
        this.isLogin = false
        this.router.push('/login')
      }
    },
    login(){},
    register(){},
  },
})

export default useLibrarianStore