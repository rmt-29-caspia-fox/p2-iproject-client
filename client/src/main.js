import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import vue3GoogleLogin from 'vue3-google-login'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

import "./assets/style.css";

const app = createApp(App);

app.use(vue3GoogleLogin, {
    clientId: '735076616915-hhbp1h5ljou53injvu1h27tdkp54et8r.apps.googleusercontent.com'
})

app.use(VueSweetalert2);

app.use(createPinia());
app.use(router);



app.mount("#app");
