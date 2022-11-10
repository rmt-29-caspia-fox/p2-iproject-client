<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { useCustomerStore } from "../stores/customer";
import Swal from "sweetalert2";
import socket from "../api/socketio";
import { useAdminStore } from "../stores/admin";

export default {
  data() {
    return {
      formRegister: {
        name: "",
        email: "",
        longitude: "",
        latitude: "",
        brand: "",
        nameOfCar: "",
        licenseNumber: "",
        service: "",
      },
    };
  },
  created() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      this.message = "Geolocation is not supported by this browser.";
    }
  },
  computed: {
    ...mapWritableState(useAdminStore, ["coords"]),
  },
  methods: {
    ...mapActions(useAdminStore, ["fetchWaitingListAdmin"]),
    ...mapActions(useCustomerStore, [
      "customerRegisterHandler",
      "waitlistRegisterHandler",
      "fetchWaitingList",
    ]),
    async registerOrder() {
      try {
        const { data } = await this.customerRegisterHandler(this.formRegister);
        await this.waitlistRegisterHandler(this.formRegister, data.id);
        Swal.fire({
          icon: "success",
          title: "Congrats, your data has been sent to admin",
          text: "please wait and check your email for couple minutes or please check to the order book if you're already in waiting list",
        });
        // this.fetchWaitingListAdmin("request");
        socket.emit("register-form-order");

        this.formRegister.brand = "";
        this.formRegister.nameOfCar = "";
        this.formRegister.licenseNumber = "";
        this.formRegister.service = "";
        this.formRegister.name = "";
        this.formRegister.email = "";
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.msg,
        });
      }
    },
    showPosition(position) {
      this.formRegister.latitude = position.coords.latitude;
      this.formRegister.longitude = position.coords.longitude;
      // socket.emit("register-form-order", {
      //   longitude: position.coords.longitude,
      //   latitude: position.coords.longitude,
      // });
    },
  },
};
</script>

<template>
  <div
    class="d-flex align-items-center justify-content-center content"
    id="form-book"
  >
    <div class="box bg-linier-2 p-3">
      <form @submit.prevent="registerOrder">
        <h2 class="text-center mb-5 border-bottom border-warning text-light">
          Book Order
        </h2>
        <div class="row justify-content-center align-items-center px-4 px-md-0">
          <div class="col-12 col-md-4 text-light">
            <div class="form-outline">
              <input
                v-model="formRegister.name"
                type="text"
                id="form8Example1"
                class="form-control"
              />
              <label class="form-label" for="form8Example1">Name</label>
            </div>
          </div>
          <div class="col-12 col-md-4 text-light">
            <div class="form-outline">
              <input
                v-model="formRegister.email"
                type="email"
                id="form8Example2"
                class="form-control"
              />
              <label class="form-label" for="form8Example2"
                >Email address</label
              >
            </div>
          </div>
        </div>
        <hr />
        <h3 class="text-center text-light">choose you cars</h3>
        <hr />
        <div class="row px-4 px-md-0">
          <div class="col-12 col-md-4 text-light">
            <div class="form-outline">
              <input
                v-model="formRegister.brand"
                type="text"
                class="form-control"
              />
              <label class="form-label">Brand</label>
            </div>
          </div>
          <div class="col-12 col-md-4 text-light">
            <div class="form-outline">
              <input
                v-model="formRegister.nameOfCar"
                type="text"
                class="form-control"
              />
              <label class="form-label">Name Car</label>
            </div>
          </div>
          <div class="col-12 col-md-4 text-light">
            <div class="form-outline">
              <input
                v-model="formRegister.licenseNumber"
                type="text"
                class="form-control"
              />
              <label class="form-label">Car License Number</label>
            </div>
          </div>
          <div class="col-12 mt-3 text-light">
            <div class="form-outline">
              <select v-model="formRegister.service" class="form-select">
                <option value="light">light</option>
                <option value="medium">medium</option>
                <option value="heavy">heavy</option>
              </select>
              <label class="visually" for="inlineFormSelectPref"
                >type of wash</label
              >
              <button
                type="submit"
                class="btn btn-outline-secondary rounded-pill w-100 mt-5 text-light"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
