import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";
import vue3GoogleLogin from "vue3-google-login";

import "./style.css";

import App from "./App.vue";
import router from "./router";

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(vue3GoogleLogin, {
  clientId:
    "878815451306-c5c0p59uboqg9cbsm5c9fo9ab01evp29.apps.googleusercontent.com",
});

app.use(pinia);
app.use(router);

app.mount("#app");
