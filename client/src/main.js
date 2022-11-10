import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import Paginate from "vuejs-paginate-next";
import vue3GoogleLogin from 'vue3-google-login'

import App from "./App.vue";
import router from "./router";

import "./assets/style.css";
import "../node_modules/sweetalert2/dist/sweetalert2.min.js";
import "../node_modules/sweetalert2/dist/sweetalert2.min.css";

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(vue3GoogleLogin, {
  clientId: '96399291446-iau9r6vu6pkcleush8btvh74t2s43jk5.apps.googleusercontent.com'
})

app.use(Paginate)
app.use(pinia);
app.use(router);

app.mount("#app");
