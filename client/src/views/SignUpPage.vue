<script>
import { mapActions } from "pinia";
import { useIndexStore } from "@/stores/index";

export default {
  data() {
    return {
      user: {
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        phoneNumber: "",
      },
    };
  },
  methods: {
    ...mapActions(useIndexStore, ["signUpHandler"]),
    signUpButton() {
      this.signUpHandler(this.user);
    },
  },
};
</script>

<template>
  <!-- Halaman untuk register, hanya ada form dan submit dan redirect ke sign-in -->
  <div class="container">
    <div
      class="row d-flex justify-content-center"
      style="
        padding-left: 3%;
        padding-right: 3%;
        margin-top: 10%;
        margin-bottom: 3%;
      "
    >
      <div class="col-12 text-center">
        <h3>Register New User</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <div class="card" style="width: 50%">
          <div class="card-body">
            <form
              action=""
              method="post"
              id="sign-up-form"
              v-on:submit.prevent="signUpButton"
            >
              <div class="d-flex justify-content-between">
                <label for="sign-up-firstName">First Name</label>
                <label class="text-danger text-end">*</label>
              </div>
              <input
                type="text"
                class="form-control"
                id="sign-up-firstName"
                placeholder="Enter your first name ..."
                autocomplete="off"
                required
                v-model="user.firstName"
              />
              <br />
              <div class="d-flex justify-content-between">
                <label for="sign-up-lastName">Last Name</label>
                <label class="text-danger text-end">*</label>
              </div>
              <input
                type="text"
                class="form-control"
                id="sign-up-lastName"
                placeholder="Enter your last name ..."
                autocomplete="off"
                required
                v-model="user.lastName"
              />
              <br />
              <div class="d-flex justify-content-between">
                <label for="sign-up-email">Email</label>
                <label class="text-danger text-end">*</label>
              </div>
              <input
                type="text"
                class="form-control"
                id="sign-up-email"
                placeholder="Enter your email address ..."
                autocomplete="off"
                required
                v-model="user.email"
              />
              <br />
              <div class="d-flex justify-content-between">
                <label for="sign-up-password">Password</label>
                <label class="text-danger text-end">*</label>
              </div>
              <input
                type="password"
                class="form-control"
                id="sign-up-password"
                placeholder="Enter your password ..."
                autocomplete="off"
                required
                v-model="user.password"
              />
              <br />
              <div class="d-flex justify-content-between">
                <label for="sign-up-phoneNumber">Phone Number</label>
                <label class="text-danger text-end">*</label>
              </div>
              <input
                type="number"
                class="form-control"
                id="sign-up-phoneNumber"
                placeholder="Enter your phone number ..."
                autocomplete="off"
                required
                v-model="user.phoneNumber"
              />
              <br />
              <div class="col d-flex justify-content-center">
                <button class="btn btn-lazpiz" type="submit">Sign up</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
