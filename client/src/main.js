import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faDiscord } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'

import App from './App.vue'
import vue3GoogleLogin from 'vue3-google-login'
import router from './router'

import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()

pinia.use(({ store }) => {
  store.router = markRaw(router)
})

library.add(faDiscord, faGoogle, faArrowLeft)

app.use(vue3GoogleLogin, {
  clientId: '1072848415686-frvpq1ovkr1t92568dckdd2aid3dug7o.apps.googleusercontent.com'
})

app.use(pinia)
app.use(router)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
