import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";
import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export const useVehicleStore = defineStore("vehicle", {
  state: () => ({
    baseUrl: 'https://server-database-mongo.herokuapp.com/',
    // baseUrl: "http://localhost:3000/",
    vehicles: [],
    vehicle: {},
    payDetail: {},
    qrCode: "",
  }),

  actions: {
    async fetchVehicles() {
      try {
        const { data } = await axios({
          url: this.baseUrl + "vehicles",
          method: "get",
        });

        this.vehicles = data;
      } catch (error) {
        console.log(error);
      }
    },

    async fetchVehicleDetail(id) {
      try {
        const { data } = await axios({
          url: this.baseUrl + `vehicles/${id}`,
          method: "get",
        });
        this.vehicle = data;
      } catch (error) {
        console.log(error);
      }
    },

    async rentHandler({ vehicleId, startDate, endDate, duration, totalPrice }) {
      try {
        await axios({
          url: this.baseUrl + "vehicles/rent",
          method: "put",
          headers: {
            access_token: localStorage.access_token,
          },
          data: {
            vehicleId,
            startDate,
            endDate,
            duration,
            totalPrice,
          },
        });
      } catch (error) {
        console.log(error);
      }
    },

    async reviewHandler(id, { rating, msg }) {
      try {
        await axios({
          url: this.baseUrl + `vehicles/review/${id}`,
          method: "put",
          headers: {
            access_token: localStorage.access_token,
          },
          data: {
            msg,
            rating,
          },
        });
      } catch (error) {
        console.log(error);
      }
    },

    async payNowDetail(id) {
      try {
        const { data } = await axios({
          url: this.baseUrl + `vehicles/rent/pay/detail/${id}`,
          method: "get",
          headers: {
            access_token: localStorage.access_token,
          },
        });

        this.payDetail = data;
      } catch (error) {
        console.log(error);
      }
    },

    async qrCodeGenerator(id) {
      try {
        const url = `https://rentalkita-dd425.web.app/vehicle/rent/pay/${id}`;
        const { data } = await axios({
          url: `https://api.happi.dev/v1/qrcode?data=${url}&width=&dots=000000&bg=FFFFFF&apikey=d8917ecx6lDdfnwyzjTjtGvw8zcOeLVr135JfDpkbsi66ZpH5osCqfLW`,
          method: "get",
          headers: {
            "x-happi-key":
              "d8917ecx6lDdfnwyzjTjtGvw8zcOeLVr135JfDpkbsi66ZpH5osCqfLW",
          },
        });
        this.qrCode = data;
      } catch (error) {
        console.log();
      }
    },

    async mailer({ qrcode, url, email }) {
      try {
        await axios({
            url: this.baseUrl + 'mailer',
            method: 'post',
            headers: {
                access_token: localStorage.access_token
            },
            data: {
                qrcode, url, email
            }
        })
      } catch (error) {
        
      }
    },
  },
});
