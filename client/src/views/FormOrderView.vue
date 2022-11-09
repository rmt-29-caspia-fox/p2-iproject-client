<script>
import { map } from "leaflet";
import { mapActions } from "pinia";
import { useWaitlistStore } from "../stores/waitinglist";

export default {
  data() {
    return {
      formRegister: {
        name: "",
        email: "",
        brand: "",
        nameOfCar: "",
        licenseNumber: "",
        service: "",
      },
    };
  },
  methods: {
    ...mapActions(useWaitlistStore, [
      "customerRegisterHandler",
      "waitlistRegisterHandler",
    ]),
    async registerOrder() {
      try {
        const { data } = await this.customerRegisterHandler(this.formRegister);
        await this.waitlistRegisterHandler(this.formRegister, data.id);
        this.$router.push("/waitinglist");
      } catch (err) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: err.response.data.msg,
        });
      }
    },
  },
};
</script>

<template>
  <div
    class="d-flex align-items-center justify-content-center content"
    id="form-book"
  >
    <div class="box bg-linier-2">
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
                id="form8Example2"
                class="form-control"
              />
              <label class="form-label" for="form8Example2">Brand</label>
            </div>
          </div>
          <div class="col-12 col-md-4 text-light">
            <div class="form-outline">
              <input
                v-model="formRegister.nameOfCar"
                type="text"
                id="form8Example2"
                class="form-control"
              />
              <label class="form-label" for="form8Example2">Name Car</label>
            </div>
          </div>
          <div class="col-12 col-md-4 text-light">
            <div class="form-outline">
              <input
                v-model="formRegister.licenseNumber"
                type="text"
                id="form8Example2"
                class="form-control"
              />
              <label class="form-label" for="form8Example2"
                >Car License Number</label
              >
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
