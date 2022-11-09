import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import vue3GoogleLogin from 'vue3-google-login'
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

import App from './App.vue'
import router from './router'

const firebaseConfig = {
  apiKey: "AIzaSyDL55KQURKSnILc0ZzYlZyEjvVhUKMK0UQ",
  authDomain: "project-news-app-1.firebaseapp.com",
  projectId: "project-news-app-1",
  storageBucket: "project-news-app-1.appspot.com",
  messagingSenderId: "1032573862846",
  appId: "1:1032573862846:web:8fd07aceee0184d3f6efef",
  measurementId: "G-VJTV6D1HGD"
};

initializeApp(firebaseConfig);

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

