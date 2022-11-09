import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import firebase from "firebase";
import App from "./App.vue";
import router from "./router";

import "./assets/style.css";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAloPILpV8G1Fbx23ucrpwnScjEIlsEIfk",
  authDomain: "iproject-carwosssh.firebaseapp.com",
  projectId: "iproject-carwosssh",
  storageBucket: "iproject-carwosssh.appspot.com",
  messagingSenderId: "317314671799",
  appId: "1:317314671799:web:797931f39a4e6eb56b1932",
};

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});
firebase.initializeApp(firebaseConfig);

app.use(firebase)
app.use(pinia);
app.use(router);

app.mount("#app");
