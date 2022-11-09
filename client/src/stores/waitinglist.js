import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import instance from "../api/axios";

export const useOrderStore = defineStore('order', {
  state: ()=>({
    user: firebase.auth().currentUser
  }),
  actions: {
    async addtoFirebase (){

    },
    addWaitinglist(payload){
      return instance.post('/customers/waitinglists/:customerid',)
    }
  },
  getters: {

  }
})