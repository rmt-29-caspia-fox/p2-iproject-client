import { defineStore } from "pinia";
import axios from "axios";

export const useGameStore = defineStore("game", {
  state: () => ({
    baseUrl: "https://matching-u.herokuapp.com",
    games: [],
  }),
  actions: {
    async getGames() {
      try {
        const { data } = await axios({
          url: "https://api.rawg.io/api/games?key=436b3e07f074437c86f00cb19e4a0026&tags=multiplayer&page_size=6",
          method: "GET",
        });
        this.games = data.results
      } catch (err) {
        console.log(err);
      }
    },
  },
});
