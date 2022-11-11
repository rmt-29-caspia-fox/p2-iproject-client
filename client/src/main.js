import { createApp, markRaw } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";


const app = createApp(App);
const pinia = createPinia()
pinia.use(({ store }) => {
    store.router = markRaw(router)
})
// app.use(vue3GoogleLogin, {
//     clientId: '685632076618-9sd6jrn995b55mloivr57ftvlhs616gj.apps.googleusercontent.com'
//   })
app.use(router);
app.use(pinia);

app.mount("#app");

