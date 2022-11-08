import { defineStore } from 'pinia'
import axios from 'axios'

export const useGameStore = defineStore('game', {
  state: () => ({
		baseUrl: 'http://localhost:3000'
	}),
	actions: {
		async loginHandler(payload){
			try {
				const {data} = await axios({
					url: this.baseUrl + '/users/login',
					method: 'post',
					data: payload
				})
				localStorage.setItem('access_token', data.access_token)
				this.router.push('/')
			} catch (error) {
				console.log(error);
			}
		},

		async registerHandler(payload){
			try {
				
			} catch (error) {
				console.log(error);
			}
		},

		async getGames(){
			try {
				const {data} = await axios({
					url: this.baseUrl + '/games',
					method: 'get',
					headers: {
						access_token: localStorage.access_token
					}
				})

				console.log(data);
			} catch (error) {
				console.log(error);
			}
		}
	}
})
