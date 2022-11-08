import { defineStore } from 'pinia'

export const useUserStore = defineStore('user',  {
    state: () => ({
      user: {
        lat: null,
        long: null
      }
      }),
      actions: {
      }
})
