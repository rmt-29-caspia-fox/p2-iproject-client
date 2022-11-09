import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueDisqus from "vue-disqus";
import VueSocialSharing from "vue-social-sharing";

import "./assets/style.css";

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(pinia);
app.use(router);
app.use(VueDisqus, { shortname: "https-masakapanie-web-app" });
app.use(VueSocialSharing);

app.mount("#app");
