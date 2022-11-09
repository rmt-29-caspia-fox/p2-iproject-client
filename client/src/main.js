import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import vue3GoogleLogin from "vue3-google-login";

const app = createApp(App);
const pinia = createPinia();

pinia.use(({ store }) => {
  store.router = markRaw(router);
});

app.use(pinia);
app.use(router);

app.use(vue3GoogleLogin, {
  clientId:
    "59509847986-2d6leab7etkccbsmeog4v9cq2l94t7hl.apps.googleusercontent.com",
});

app.mount("#app");
