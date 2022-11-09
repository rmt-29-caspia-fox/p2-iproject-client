import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from 'axios'

export const useVehicleStore = defineStore("vehicle", {
  state: () => ({
    // baseUrl: 'https://movie-cms1.herokuapp.com/pub/',
    baseUrl: "http://localhost:3000/",
    isLogin: false,
    vehicles: []
  }),

  actions: {
    
    async fetchVehicles() {
        try {
            const { data } = await axios({
                url: this.baseUrl + 'vehicles',
                method: 'get'
            })

            this.vehicles = data
        } catch (error) {
            console.log(error)
        }
    }

  },
});