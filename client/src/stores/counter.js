import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

const urlServer = "http://localhost:3000/"

export const useCounterStore = defineStore("counter", {
  state:()=>{
    return {
      books:[]
    }
  },
  actions: {
    async searchG(query){
      try {
        const { data } = await axios({
          method: "post",
          url: urlServer + "gsearch",
          data: { query },
        });
        console.log(data);
        this.books = data;
      } catch (error) {
        console.log(error)
      }
    }
  }
});
