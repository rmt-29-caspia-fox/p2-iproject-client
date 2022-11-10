import { defineStore } from "pinia";
import axios from 'axios'

export const useHeroStore = defineStore("hero", {
  state: () => ({
    baseUrl: 'http://localhost:3000',
    heros: [],
    roleHero: [],
  }),
  actions: {
    async fetchHero(){
        try {
            const {data} = await axios({
                url: this.baseUrl + '/heroes',
                method: 'get'
            })
            console.log(data);
            this.heros = data
        } catch (err) {
            console.log(err);
        }
    },

    async fetchHeroByRole(payload){
      try {
        const {data} = await axios({
          url: this.baseUrl + '/heroes/role',
          method: 'get',
          params: payload
        })
        this.roleHero = data
      } catch (err) {
        console.log(err)
      }
    }
  }
})