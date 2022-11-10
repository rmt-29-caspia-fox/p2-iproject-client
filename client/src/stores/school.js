import { defineStore } from "pinia";
import axios from "axios";

export const useSchoolStore = defineStore("school", {
  state: () => ({
    baseUrl: "http://localhost:3000",
    school: [],
  }),
  actions: {
    async getAllSchool() {
      try {
        const {data} = await axios({
          url: this.baseUrl + "/school",
          method: "get",
        });
        // console.log(data, 'store');
        this.school = data.dataSekolah;
      } catch (err) {
        console.log(err);
      }
    },
  },
});
