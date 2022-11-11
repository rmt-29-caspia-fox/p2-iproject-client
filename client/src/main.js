import { createPinia } from "pinia";
import { createApp, markRaw } from "vue";
import vue3GoogleLogin from "vue3-google-login";

import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.min.js";

const app = createApp(App);
const pinia = createPinia();
pinia.use(({ store }) => {
  store.router = markRaw(router);
});
app.use(pinia);
app.use(vue3GoogleLogin, {
  clientId:
    "667210481291-r9mu6ek49jo86qcpm63ijnc65hjur7e9.apps.googleusercontent.com",
});
app.use(router);

app.mount("#app");