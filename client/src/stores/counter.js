import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from 'axios'

const base_url = "http://localhost:3000"

const client_url = "http://localhost:5173"

export const useCounterStore = defineStore("counter", {
  state:() => ({
    message: '',
    qrCode: '',
    baseUrl: base_url,
    clientUrl: client_url,
    userData: [],
    isMember: false,
    genreIdStore: '0',
    whitelistData: [],
    loginForm: {
      email: '',
      password: ''
    },
    registerForm: {
        username: '',
        email: '',
        password: '',
        phone: '',
        address: ''
    },
    movies: [],
    movie: [],
    genres: [],
    pageData: '',
    address: {
      provinces: [],
      cities: [],
      districts: [],
      villages: []
    },
    alamat: {
      provinsi: {
        id: '0',
        name: ''
      },
      kota: {
        id: '0',
        name: ''
      },
      kecamatan: {
        id: '0',
        name: ''
      },
      kelurahan: {
        id: '0',
        name: ''
      },
    },
    formAddress: {
      provinsi: '',
      kota: '',
      kecamatan: '',
      kelurahan: ''
    }
  }),
  actions: {
    // postLoginPost(val){
    //   console.log(val);
    // }

    async fetchApiProvince() {
      try {
        const response = await axios({
          method: "get",
          url: "http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json"
        });
        console.log(response);
        this.address.provinces = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async fetchApiCity() {
      try {
        const response = await axios({
          method: "get",
          url: `http://www.emsifa.com/api-wilayah-indonesia/api/regencies/${this.alamat.provinsi.id}.json`
        });
        console.log(response);
        this.address.cities = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async fetchApiDistrict() {
      try {
        const response = await axios({
          method: "get",
          url: `http://www.emsifa.com/api-wilayah-indonesia/api/districts/${this.alamat.kota.id}.json`
        });
        console.log(response);
        this.address.districts = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async fetchApiVillage() {
      try {
        const response = await axios({
          method: "get",
          url: `http://www.emsifa.com/api-wilayah-indonesia/api/villages/${this.alamat.kecamatan.id}.json`
        });
        console.log(response);
        this.address.villages = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async fetchUserStore() {
      try {
        const response = await axios({
          method: "get",
          url: base_url + "/user",
          headers: {
            access_token: localStorage.access_token,
          },
        });
        console.log(response);
        this.userData = response.data;
      } catch (err) {
        console.log(err);
      }
    },

    async fetchMovieStore(id, idgenre, search) {
      try {
        let image = this.getqrCode(id)
        if (id <= 1 || id === null){
          id = 1
        }

        // let data

        // if(idgenre){
        //   data = base_url + "/public/movies?page=" + id + "&genre=" + idgenre
        // }

        // if(search){
        //   data = base_url + "/public/movies?page=" + id + '&search=' + search
        // }

        const response = await axios({
          method: "get",
          url: base_url + '/products'
        });
        this.movies = response.data;
        console.log(this.movie);
      } catch (err) {
        console.log(err);
        // this.$swal('Bad Request');
      }
    },

    // async fetchMovieStore(id, idgenre, search) {
    //   try {
    //     let image = this.getqrCode(id)
    //     if (id <= 1 || id === null){
    //       id = 1
    //     }

    //     let data

    //     if(idgenre){
    //       data = base_url + "/public/movies?page=" + id + "&genre=" + idgenre
    //     }

    //     if(search){
    //       data = base_url + "/public/movies?page=" + id + '&search=' + search
    //     }

    //     const response = await axios({
    //       method: "get",
    //       url: data
    //     });
    //     this.movies = response.data.message;
    //     console.log(this.movie);
    //   } catch (err) {
    //     console.log(err);
    //     // this.$swal('Bad Request');
    //   }
    // },
    
    async fetchMovieByIdStore(id) {
      try {
        const response = await axios({
          method: "get",
          url: base_url + "/product/" + id
        });
        console.log(response.data);
        this.movie = response.data;
      } catch (err) {
        console.log(err);
        // this.$swal('Bad Request');
      }
    },
    async fetchGenreStore() {
      try {
        const response = await axios({
          method: "get",
          url: base_url + "/public/genres"
        });
        console.log(response.data.message);
        this.genres = response.data.message;
      } catch (err) {
        console.log(err);
        // this.$swal('Bad Request');
      }
    },
    async postLoginStore(val) {
      try {
        const response = await axios({
          method: "post",
          url: base_url + "/login",
          data: val,
        });
        console.log(response);
        if (response) {
          localStorage.setItem("access_token", response.data.access_token);
          return true
        } else {
          throw { name: "bad_request" };
        }
      } catch (err) {
        console.log(err);
      }
    },
    async postRegisterStore(payload){
      try {
          const response = await axios({
              method: "post",
              url: base_url + "/register",
              data: payload
          });
          if (response) {
            // localStorage.setItem("access_token", response.data.access_token);
            return true
          } else {
            throw { name: "bad_request" };
          }
      } catch (err) {
          console.log(err);
          // this.$swal('Bad Request');
      }
    },
    // async getWhitelist(){
    //   try {
    //     const response = await axios({
    //       method: "get",
    //       url: base_url + "/public/whitelist",
    //       headers: {
    //         access_token: localStorage.access_token
    //       }
    //     });
    //     this.whitelistData = response.data
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
    async postBuy(id, phone){
      try {
        console.log(id, phone);
        const response = await axios({
          method: "post",
          url: base_url + "/buy/" + id,
          data: {
            phone: phone
          },
          headers: {
            access_token: localStorage.access_token
          }
        });
        this.message = response.data
      } catch (err) {
        console.log(err);
      }
    },
    async deletelistStore(id){
      try {
        const response = await axios({
          method: "delete",
          url: base_url + "/public/whitelist",
          data: {
            idmovie: id
          },
          headers: {
            access_token: localStorage.access_token
          }
        });
        this.whitelistData = response.data
      } catch (err) {
        console.log(err);
      }
    },
    async checkToken(){
      if(localStorage.access_token){
        this.isMember = true
      } else {
        this.isMember = false
      }
    },
    // async paginationStore(){
    //   try {
    //     const result = await axios({
    //       method: 'get',
    //       url: base_url + "/public/count",
    //     });
    //     this.pageData = Math.ceil(result.data.movies / 12)
    //   } catch (err) {
    //     console.log(err);
    //   }
    // },
    async getqrCode(id){
      try {
        const result = await axios({
          method: 'get',
          url: "https://api.happi.dev/v1/qrcode",
          params: {
            data: client_url + "/public/movie/" + id,
            apikey: "df0580CbdB0ktn5dnTHdeQsWknArCwi8smdVYZKb0DBjYWLpQ9FsLLd1",
            dots: '000000',
            bg: 'FFFFFF',
            width: '200'
          },
        });

        this.qrCode = result.data.qrcode
      } catch (err) {
        console.log(err);
      }
    }
  },
  getter: {

  }

})