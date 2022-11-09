import { defineStore } from "pinia";
import instance from "../api/axios";

export const useAdminStore = defineStore("admin", {
  state: () => ({
  }),
  actions: {
    login(dataObj){
        return instance({
            method: 'post',
            url: '/admin/login',
            data: {
                email: dataObj.email,
                password: dataObj.password
            }
        })
    }
  },
  getters: {},
});
