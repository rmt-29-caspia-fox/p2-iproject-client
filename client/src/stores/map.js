import { defineStore } from "pinia";

export const useMapStore = defineStore("map", {
  state: () => ({
    map: null,
    storeLoc: {
      latitude: -5.354929305755995,
      longitude: 105.30084972794684,
    },
    userLoc: {
      lat: 0,
      long: 0,
    },
  }),
  actions: {
    
  },
  getters: {},
});
