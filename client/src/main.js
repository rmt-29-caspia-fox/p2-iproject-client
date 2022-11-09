import { createApp } from "vue";
import { createPinia } from "pinia";
import vue3GoogleLogin from "vue3-google-login";

import keys from "./client_secret_520817930211-gca4lbhljg4gguj40k363qj0gup872n5.apps.googleusercontent.com.json";

import App from "./App.vue";
import router from "./router";

// import "./assets/main.css";

const app = createApp(App);

app.use(vue3GoogleLogin, {
  clientId: keys.web.client_id,
});
// app.use(GAuth, gauthOption);
app.use(createPinia());
app.use(router);

app.mount("#app");
