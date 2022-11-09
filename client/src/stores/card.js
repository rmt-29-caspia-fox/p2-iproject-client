import { defineStore } from 'pinia'
import axios from 'axios'

export const useCardStore = defineStore('card', {
  state: () => (
    {
      baseUrl: "http://localhost:3000",
      cards: [],
      cardOne: {},
      cardTwo: {}
    }
  ),
  getters: {

  },
  actions: {
    async getCard(name, race) {
      let payload = {};
      if (name) {
        payload.fname = name
      }
      if (race) {
        payload.race = race
      }
      try {
        const { data } = await axios({
          method: "get",
          url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
          params: payload
        })
        this.cards = data.data.slice(0, 20);
      } catch (err) {
        console.log(err)
      }
    },
    async getCardOne(id) {
      try {
        const { data } = await axios({
          method: "get",
          url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
          params: { id: id }
        })
        this.cardOne = data.data[0]
      } catch (err) {
        console.log(err)
      }
    },
    async getCardTwo(id) {
      try {
        const { data } = await axios({
          method: "get",
          url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
          params: { id: id }
        })
        this.cardTwo = data.data[0]
      } catch (err) {
        console.log(err)
      }
    }
  }
})
