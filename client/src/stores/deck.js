import { defineStore } from 'pinia'
import axios from 'axios'
import fileDownload from 'js-file-download'

export const useDeckStore = defineStore('deck', {
  state: () => (
    {
      baseUrl: "http://localhost:3000",
      decks: [],
      inputDeck: []
    }
  ),
  getters: {

  },
  actions: {
    async fetchDeck() {
      try {
        const { data } = await axios({
          method: "get",
          url: this.baseUrl + '/decks',
          headers: { access_token: localStorage.access_token }
        })
        this.decks = data.decks
      } catch (err) {
        console.log(err);
      }
    },
    async deleteDeck(id) {
      try {
        const { data } = await axios({
          method: "delete",
          url: this.baseUrl + `/decks/${id}`,
          headers: { access_token: localStorage.access_token }
        })
      } catch (err) {
        console.log(err);
      }
    },
    async downloadDeck(id) {
      try {
        const { data } = await axios({
          method: "get",
          url: this.baseUrl + `/decks/download/${id}`,
          headers: { access_token: localStorage.access_token },
          responseType: 'blob'
        })
        fileDownload(data, 'deck.ydk')
      } catch (err) {
        console.log(err);
      }
    },

    async saveDeck(name) {
      try {
        const { data } = await axios({
          method: "post",
          url: this.baseUrl + `/decks`,
          headers: { access_token: localStorage.access_token },
          data: {
            card: this.inputDeck,
            name: name
          }
        })
      } catch (err) {
        console.log(err)
      }
    },
    async deckDetail(id) {
      try {
        const { data } = await axios({
          method: "get",
          url: this.baseUrl + `/decks/${id}`,
          headers: { access_token: localStorage.access_token }
        })
        this.inputDeck = data.detail.Cards
      } catch (err) {
        console.log(err)
      }
    }
  }
})
