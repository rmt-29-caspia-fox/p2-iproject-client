import { ref, computed } from "vue";
import { defineStore } from "pinia";
import instance from "../api/axios";
import { Swal } from "sweetalert2/dist/sweetalert2.min";

export const useWaitlistStore = defineStore("waitlist", {
  state: () => ({
    user: "",
    waitlists: [],
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
    patchWaitlist(status, id){
      return instance({
        // /waitinglists
        url: `/admin/waitinglists/${id}`,
        method: 'patch',
        headers: {access_token: localStorage.access_token},
        data: {status}
      })
    }
  },
  getters: {},
});
