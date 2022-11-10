import { createRouter, createWebHistory } from 'vue-router'


import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import NotFound from '../views/NotFound.vue'
import GameItems from '../views/GameItems.vue'
// import FreeFire from '../views/GameItems.vue'

const routes = [
  { path: '/', component: Home, name: 'Home' },
	{ path: '/login', component: Login, name: 'Login' },
	{ path: '/register', component: Register, name: 'Register' },
	{ path: '/items/:id', component: GameItems, name: 'GameItems' },
	
	{ path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHistory(),
  routes, 
})

router.beforeEach((to, from) => {
  if (to.name == "Home" && !localStorage.access_token) {
    return "/login";
  }
	if (to.name == "Login" && localStorage.access_token) {
    return "/";
  }
	if (to.name == "Register" && localStorage.access_token) {
    return "/";
  }
});


export default router
