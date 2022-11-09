<template>
  <div class="search">
      <h1 class="text-center">FREEBOOK</h1>
    <form class="d-flex" role="search">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
        v-model="query"
      />
      <button
        class="btn btn-outline-success"
        type="submit"
        @click.prevent="emitSrc"
      >
        Search
      </button>
      <!-- <button class="btn btn-primary" @click.prevent="displayConsent">Google Log In</button> -->
    </form>
  </div>
  <div id="googlebtn">
    <GoogleLogin :callback="callback" />
  </div>
  <!-- <form class="form">
    <input type="text" v-model="query" class="form-control-lg"/>
    <button class="btn btn-primary" @click.prevent="emitSrc"><img src="@/components/icons/icons8-search-50.png"></button>
  </form> -->
</template>

<script>
import { mapActions } from "pinia";
import { useCounterStore } from "../stores/counter";
import keys from "../client_secret_520817930211-gca4lbhljg4gguj40k363qj0gup872n5.apps.googleusercontent.com.json";

export default {
  data() {
    return {
      query: "",
    };
  },
  methods: {
    ...mapActions(useCounterStore, [
      "searchG",
      "googleLogin",
      "displayConsent",
    ]),
    emitSrc() {
      this.searchG(this.query);
    },
    callback(response) {
      // This callback will be triggered when the user selects or login to
      // his Google account from the popup
      // console.log("Handle the response", response)
      this.googleLogin(response);
    },
    handleCredentialResponse(response) {
      // console.log("Encoded JWT ID token: " + response.credential);
      this.googleLogin(response);
    },
  },
  beforeMount() {
    // google.accounts.id.initialize({
    //   client_id: keys.web.client_id,
    //   callback: this.handleCredentialResponse,
    // });
    // google.accounts.id.renderButton(
    //   document.getElementById("buttonDiv"),
    //   { theme: "outline", size: "large" } // customization attributes
    // );
    // google.accounts.id.prompt(); // also display the One Tap dialog
  },
};
</script>

<style scoped>
.search {
  position: absolute;
  top: 45%;
  left: 45%;
  transform: translate(-50%, -50%);
}
#googlebtn {
  position: fixed;
  right: 0;
}
</style>
