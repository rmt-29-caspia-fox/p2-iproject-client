import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'

export const useGameStore = defineStore('game', {
  state: () => ({
		baseUrl: 'http://localhost:3000',
		isLogin: false,
		games: [],
		gameId: '',
		gameItems: [],
		midToken: '',

	}),
	actions: {
		SuccessSwal(msg){
			Swal.fire({
				position: 'top-end',
				icon: 'success',
				title: msg,
				showConfirmButton: false,
				timer: 1500
			})
		},

		ErrorSwal(msg){
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: msg
			})
		},

		async loginHandler(payload){
			try {
				const {data} = await axios({
					url: this.baseUrl + '/users/login',
					method: 'post',
					data: payload
				})
				localStorage.setItem('access_token', data.access_token)
				this.router.push('/')
				this.isLogin = true
			} catch (error) {
				console.log(error);
			}
		},

		async googleLogin(response){
			try {
        const {data} = await axios({
          url: this.baseUrl + "/google-login",
          method: "post",
          headers: {
            google_token: response.credential,
          },
        });
        localStorage.setItem("access_token", data.access_token);
				this.SuccessSwal('Login Success')
				this.router.push("/");
				this.isLogin = true

      } catch (error) {
        const msg = error.response.data.message
				this.ErrorSwal(msg)
      }
		},

		async registerHandler(payload){
			try {
				console.log(payload);
				await axios({
					url: this.baseUrl + '/users/register',
					method: 'post',
					data: payload
				})
				this.router.push('/login')
				this.SuccessSwal('Register Success!')
			} catch (error) {
				this.ErrorSwal(error)
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
				this.games = data.games
			} catch (error) {
				console.log(error);
			}
		},

		async getGameItems(){
			try {
				const { data} = await axios({
					url: this.baseUrl + '/gameItems',
					method: 'get',
					headers: {
						access_token: localStorage.access_token
					}
				})
				this.gameItems = data.gameItems
			} catch (error) {
				console.log(error);
			}
		},
		
		async getTokenMid(price){
			try {
				const {data} = await axios({
					url: this.baseUrl + '/midToken',
					method: 'post',
					data: {
						price
					},
					headers: {
						access_token: localStorage.access_token
					}
				})

				this.midToken = data.transactionToken
				window.snap.pay(this.midToken, {
          onSuccess: function(result){;
						this.router.push("/");
						this.SuccessSwal('Payment Success!')
					}
        })
			} catch (error) {
				this.ErrorSwal(error)
			}
		}
	}
})
