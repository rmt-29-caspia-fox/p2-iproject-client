import { ref, computed } from "vue";
import { defineStore } from "pinia";
import instance from "../api/axios";
import { Swal } from "sweetalert2/dist/sweetalert2.min";

export const useCustomerStore = defineStore("customer", {
  state: () => ({
    user: "",
    waitlists: [],
  }),
  actions: {
    async fetchWaitingList() {
      try {
        const { data } = await instance({
          url: "/customers/waitinglists",
          method: "get",
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
          latitude: payload.latitude
        },
      });
    },
    waitlistRegisterHandler(payload,id) {
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
