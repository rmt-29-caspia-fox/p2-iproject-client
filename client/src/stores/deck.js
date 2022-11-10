import { defineStore } from 'pinia'
import axios from 'axios'
import fileDownload from 'js-file-download'

export const useDeckStore = defineStore('deck', {
  state: () => (
    {
      baseUrl: "https://dbuilder-iproject-server.herokuapp.com",
      decks: [],
      inputDeck: [],
      qrCode: ""
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
        Swal.fire(
          'Deleted',
          'Item has been deleted.',
          'success'
        )
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong!',
          text: 'Contact us!'
        })
      }
    },
    async downloadDeck(id) {
      try {
        const { data } = await axios({
          method: "get",
          url: this.baseUrl + `/download/${id}`,
          headers: { access_token: localStorage.access_token },
          responseType: 'blob'
        })
        fileDownload(data, 'deck.ydk')
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong!',
          text: 'Contact us!'
        })
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
        Swal.fire(
          'Input Success',
          'Your deck has been saved',
          'success'
        )
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong!',
          text: 'Contact us!'
        })
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
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong!',
          text: 'Contact us!'
        })
      }
    },
    async editDeck(id, name) {
      try {
        const { data } = await axios({
          method: "put",
          url: this.baseUrl + `/decks/${id}`,
          headers: { access_token: localStorage.access_token },
          data: {
            card: this.inputDeck,
            name: name
          }
        })
        Swal.fire(
          'Input Success',
          'Your deck has been edited',
          'success'
        )
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong!',
          text: 'Contact us!'
        })
      }
    },
    async fetchQR(id) {
      try {
        const { data } = await axios({
          method: "get",
          url: "https://api.happi.dev/v1/qrcode",
          headers: {
            "x-happi-key": "b707c6zNw79g21upLO0alrmPyN0IXbrkbzrKezc6nSw79wVX1ynVDKvk"
          },
          params: {
            data: this.baseUrl + `/download/${id}`,
            width: 160,
            bg: "FFFFFF",
            dots: "000000"
          }
        })
        this.qrCode = data.qrcode
      } catch (err) {
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong!',
          text: 'Contact us!'
        })
      }
    }
  }
})
