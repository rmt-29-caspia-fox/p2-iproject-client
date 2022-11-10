import { ref, computed } from "vue";
import { defineStore } from "pinia";
import instance from "../api/axios";


export const useCustomerStore = defineStore("customer", {
  state: () => ({
    user: "",
    waitlists: [],
  }),
  actions: {
    async fetchWaitingList(params) {
      try {
        const { data } = await instance.get("/customers/waitinglists", {
          params,
        });
        this.waitlists = data;
      } catch (err) {
        console.log(err);
      }
    },
    customerRegisterHandler(payload) {
      return instance({
        url: "/customers/register",
        method: "post",
        data: {
          name: payload.name,
          email: payload.email,
          longitude: payload.longitude,
          latitude: payload.latitude,
        },
      });
    },
    waitlistRegisterHandler(payload, id) {
      return instance({
        // /waitinglists/:customerid
        url: `/customers/waitinglists/${id}`,
        method: "post",
        data: {
          brand: payload.brand,
          name: payload.nameOfCar,
          licenseNumber: payload.licenseNumber,
          service: payload.service,
        },
      });
    },
  },
  getters: {},
});
