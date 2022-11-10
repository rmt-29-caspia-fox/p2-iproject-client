<script>
import { mapActions } from "pinia";
import { useGlobalStore } from "../stores/globalStore";

export default {
  data() {
    return {
      fullName: "",
      email: "",
      password: "",
      phoneNumber: "",
      address: "",
    };
  },
  methods: {
    ...mapActions(useGlobalStore, ["register"]),

    registerHandler() {
      const payload = {
        fullName: this.fullName,
        email: this.email,
        password: this.password,
        phoneNumber: this.phoneNumber,
        address: this.address,
      };
      this.register(payload);
    },
  },
};
</script>
<template>
  <div class="container">
    <div class="row d-flex justify-content-center">
      <div class="col-md-10 col-lg-8">
        <div class="card">
          <div class="card-body">
            <h3 class="card-title mb-4 text-center">Register</h3>
            <hr class="mb-4" />
            <form class="mb-4" @submit.prevent="registerHandler">
              <div class="row mb-3">
                <div class="col-3">
                  <label for="exampleInputEmail1" class="form-label"
                    >Full Name</label
                  >
                </div>
                <div class="col-9">
                  <input
                    v-model="fullName"
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-3">
                  <label for="exampleInputEmail1" class="form-label"
                    >Email</label
                  >
                </div>
                <div class="col-9">
                  <input
                    v-model="email"
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-3">
                  <label for="exampleInputPassword1" class="form-label"
                    >Password</label
                  >
                </div>
                <div class="col-9">
                  <input
                    v-model="password"
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-3">
                  <label for="exampleInputEmail1" class="form-label"
                    >Phone Number</label
                  >
                </div>
                <div class="col-9">
                  <input
                    v-model="phoneNumber"
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
              </div>
              <div class="row mb-3">
                <div class="col-3">
                  <label for="exampleInputEmail1" class="form-label"
                    >Address</label
                  >
                </div>
                <div class="col-9 mb-3">
                  <input
                    v-model="address"
                    type="text"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                </div>
                <div class="row">
                  <div class="col-3"></div>
                  <div class="col-9">
                    <button type="submit" class="btn btn-primary">
                      Register
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  min-height: 55vh;
}
</style>
