import { defineStore } from "pinia";
import instance from "../api/axios";

export const useAdminStore = defineStore("admin", {
  state: () => ({
    waitlistsAdmin: [],
    state: undefined,
    coords : {
      longitude: '',
      latitude: ''
    }
  }),
  actions: {
    login(dataObj) {
      return instance({
        method: "post",
        url: "/admin/login",
        data: {
          email: dataObj.email,
          password: dataObj.password,
        },
      });
    },
    async fetchWaitingListAdmin(param) {
      try {
        const { data } = await instance({
          url: "/admin/waitinglists",
          method: "get",
          params: { status: param },
        });

        this.waitlistsAdmin = data;
      } catch (err) {
        console.log(err);
      }
    },
    patchWaitlist(status, id) {
      return instance({
        // /waitinglists
        url: `/admin/waitinglists/${id}`,
        method: "patch",
        headers: { access_token: localStorage.access_token },
        data: { status },
      });
    },

    getWaitlist(id) {
      return instance({
        // /waitinglists
        url: `/admin/waitinglists/${id}`,
        method: "get",
        headers: { access_token: localStorage.access_token },
      });
    },
    handlerMail(payload) {
      return instance({
        // /waitinglists
        url: `/admin/mailer`,
        method: "post",
        headers: { access_token: localStorage.access_token },
        data: {
          email: payload.email,
          coordinate: payload.coord,
        },
      });
    },
  },
  getters: {},
});
