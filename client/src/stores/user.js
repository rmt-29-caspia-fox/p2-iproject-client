import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({
    // baseUrl: 'https://movie-cms1.herokuapp.com/pub/',
    baseUrl: "http://localhost:3000/pub/",
    isLogin: false,
  }),

  actions: {
    
  },
});