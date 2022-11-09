import { ref, computed } from "vue";
import { defineStore } from "pinia";
import instance from "../api/axios";

export const useWaitlistStore = defineStore("waitlist", {
  state: () => ({
    user: '',
    waitlists : []
  }),
  actions: {
    async addtoFirebase() {},
    addWaitinglist(payload) {
      // return instance.post('/customers/waitinglists/:customerid',)
    },
    async fetchWaitingList(param) {
      try {
        const { data } = await instance({
          url: "/customers/waitinglists",
          method: "get",
          params: { status: param },
        });
        this.waitlists = data
      } catch (err) {
        console.log(err);
      }
    },
  },
  getters: {},
});
