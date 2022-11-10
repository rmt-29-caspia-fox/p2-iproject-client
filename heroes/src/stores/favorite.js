import { defineStore } from "pinia";
import axios from 'axios'

export const useFavoriteStore = defineStore("favorite", {
    state: () => ({
        baseUrl: 'https://i-project-naufal.herokuapp.com',
        favorites: []
    }),
    actions: {
        async fetchFav(){
            try {
                const {data} = await axios({
                    url: this.baseUrl + '/favorites',
                    method: 'get',
                    headers: {
                        access_token : localStorage.access_token
                    }
                })
                this.favorites = data
            } catch (err) {
                console.log(err);
            }
        },

        async addFav(id){
            try {
                const {data} = await axios({
                    url: this.baseUrl + '/favorites/' + id,
                    method: 'post',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                this.router.push('/favorites')
            } catch (err) {
                console.log(err);
            }
        },

        async deleteFav(id){
            try {
                await axios({
                    url: this.baseUrl + '/favorites/' + id,
                    method: 'delete',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                this.fetchFav()
                this.router.push('/favorites')
            } catch (err) {
                console.log(err);
            }
        },

        async sendMail(){
            try {
                await axios({
                    url: this.baseUrl + '/favorites/mail',
                    method: 'post',
                    headers: {
                        access_token: localStorage.access_token
                    }
                })
                this.router.push('/')
            } catch (err) {
                console.log(err);
            }
        }
    }
})