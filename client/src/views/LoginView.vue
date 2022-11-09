<script>
import Swal from "sweetalert2";
import { mapActions, mapWritableState } from "pinia";
import { useCustomerStore } from "../stores/customer";

export default {
  data() {
    return {
      customer: {
        email: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapWritableState(useCustomerStore, ["isLogin"]),
  },
  methods: {
    ...mapActions(useCustomerStore, ["submitLogin", "googleLogin"]),
    loginEvent() {
      console.log("masuk method local");
      this.submitLogin(this.customer)
        .then((result) => {
          // console.log(result, "<< result", result.data, "<< result data");
          localStorage.setItem("access_token", result.data.access_token);
          this.isLogin = true;

          let timerInterval;
          Swal.fire({
            icon: "success",
            title: "Successfully logging in!",
            timer: 3000,
            timerProgressBar: true,
            didOpen: () => {
              Swal.showLoading();
            },
            willClose: () => {
              clearInterval(timerInterval);
            },
          });

          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error);
          Swal.fire({
            icon: "error",
            title: "Error!",
            text: `${error.response.data.message}`,
          });
        });
    },
  },
};
</script>

<template>
  <div class="container d-flex justify-content-center">
    <div class="row my-5">
      <div class="col-md-6 text-left text-white lcol">
        <div class="greeting"></div>
        <h6 class="mt-3"></h6>
      </div>
      <div class="col-md-6 rcol">
        <form @submit.prevent="loginEvent" class="login">
          <h2 class="heading mb-4">Login</h2>
          <div class="mb-3 mt-3">
            <div class="d-flex justify-content-between">
              <label for="login-email">Email</label>
              <label class="text-WHITE text-end fw-bold">*</label>
            </div>
            <input
              type="email"
              class="form-control"
              id="login-email"
              placeholder="Enter email address ..."
              autocomplete="off"
              v-model="customer.email"
              required
            />
          </div>
          <div class="mb-4">
            <div class="d-flex justify-content-between">
              <label for="login-password">Password</label>
              <label class="text-WHITE text-end fw-bold">*</label>
            </div>
            <input
              type="password"
              class="form-control"
              id="login-password"
              placeholder="Enter your password ..."
              autocomplete="off"
              v-model="customer.password"
              required
            />
          </div>
          <div class="checkbox mb-3">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="login-remember"
              />
              <label class="form-check-label" for="login-remember">
                Remember me
              </label>
            </div>
          </div>
          <button type="submit" class="btn btn-dark mt-5">LOG IN</button>
          <br />
          <br />
          <!-- glogin -->
        </form>

        <p class="exist mt-4">
          Don't have an account?
          <RouterLink to="/register"><span>Register Here</span></RouterLink>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap");
body {
  background: #e1ebec;
  font-family: "Poppins", sans-serif;
}
.row {
  width: 900px;
  border: none;
  border-radius: 0;
  box-sizing: border-box;
}
.lcol {
  background: linear-gradient(
    to bottom,
    rgba(26, 111, 118, 1) 50%,
    rgba(40, 30, 101, 1) 100%,
    rgba(125, 185, 232, 1) 100%
  );
  background-image: url("https://pbs.twimg.com/media/FC-FI8waIAAvh6T?format=jpg&name=4096x4096");
  background-size: cover;
  background-position: center;
  height: 800px;
  padding: 0 35px;
}
.rcol {
  background: #fff9ed;
  padding: 80px;
  height: 800px;
}
span.txt {
  color: #ff6d6d;
}
.greeting {
  padding-top: 400px;
  padding-right: 50px;
}
h6.mt-3 {
  padding-right: 115px;
  color: #afc50a;
}
.footer {
  margin-top: 220px;
}
.footer span {
  color: #b0a1e2;
  font-size: 9px;
  cursor: pointer;
}
.fab {
  color: #ededf5;
  font-size: 10px;
  margin-right: 20px;
  padding-top: 3px;
  cursor: pointer;
}
h2.heading {
  font-weight: bold;
}
.form-control {
  border: none;
  border-radius: 0px;
  border-bottom: 1px solid #f2f2f2;
}
.form-control::placeholder {
  font-size: 13px;
  color: #a9a4a4;
}
.form-control:focus {
  box-shadow: none;
  border-bottom: 1px solid #f2f2f2;
}
.fone input {
  padding-left: 20px;
}
.fone {
  position: relative;
}

.fone .fas {
  position: absolute;
  left: 0;
  top: 5px;
  padding: 8px 0px;
  color: #c2c2cc;
  font-size: 12px;
}
.fone .image {
  position: absolute;
  left: 275px;
  top: 0px;
  cursor: pointer;
}
.form-check-input {
  margin-top: 10px;
}
.form-check-label {
  font-size: 9px;
  color: #c2c2cc;
}
.btn-dark {
  padding: 7px 40px;
  background: #000000;
  border: none;
  border-radius: 30px;
  font-size: 13px;
}
.btn-dark:hover {
  background: #b6bbad;
}
.btn-dark:focus {
  box-shadow: none;
}
u {
  cursor: pointer;
}
p.exist {
  font-size: 18px;
  color: #44362b;
}
p.exist span {
  cursor: pointer;
  color: #a7ad32;
}

@media screen and (max-width: 993px) {
  .fone .image {
    position: absolute;
    left: 180px;
  }
  .footer {
    margin-top: 170px;
  }
}
@media screen and (max-width: 768px) {
  .row {
    width: 450px;
  }
  .rcol {
    padding: 60px 180px 60px 60px;
  }
}
@media screen and (max-width: 420px) {
  .rcol {
    padding: 60px 50px 60px 50px;
  }
  .footer {
    margin-top: 140px;
  }
}
</style>
