import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'

import App from './App.vue'
import router from './router'


const app = createApp(App)
const pinia = createPinia()

pinia.use(({store})=> {
  store.router = markRaw(router)
})

app.use(vue3GoogleLogin, {
  clientId: '458013206469-bua31a9etgk2ur838lpurd4tvueptmkc.apps.googleusercontent.com'
})

app.use(pinia)
app.use(router)

app.mount('#app')
