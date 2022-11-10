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
        let lowPrice = 999999;
        for (const property in data.data[0].card_prices[0]) {
          if (data.data[0].card_prices[0][property] < lowPrice && data.data[0].card_prices[0][property] != 0) {
            lowPrice = data.data[0].card_prices[0][property]
          }
        }
        const response = await axios({
          method: "get",
          url: "https://api.apilayer.com/exchangerates_data/convert",
          headers: { apikey: "QxkvFdeS6GAs2EmYPFCa89V3M3qp7iGU" },
          params: {
            to: "IDR",
            from: "USD",
            amount: lowPrice
          }
        })
        data.data[0]["lowPrice"] = response.data
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
        let lowPrice = 999999;
        for (const property in data.data[0].card_prices[0]) {
          if (data.data[0].card_prices[0][property] < lowPrice && data.data[0].card_prices[0][property] != 0) {
            lowPrice = data.data[0].card_prices[0][property]
          }
        }
        const response = await axios({
          method: "get",
          url: "https://api.apilayer.com/exchangerates_data/convert",
          headers: { apikey: "QxkvFdeS6GAs2EmYPFCa89V3M3qp7iGU" },
          params: {
            to: "IDR",
            from: "USD",
            amount: lowPrice
          }
        })
        data.data[0]["lowPrice"] = response.data
        this.cardTwo = data.data[0]
      } catch (err) {
        console.log(err)
      }
    }
  }
})
