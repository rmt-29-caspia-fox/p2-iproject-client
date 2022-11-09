<script>
import { mapStores, mapActions } from 'pinia'
import { useUserStore } from '../stores/user';

export default {
	data() {
		return {
			access_token: ""
		}
	},
	computed: {
		...mapStores(useUserStore, ['username', 'isLogin'])
	},
	methods: {
		...mapActions(useUserStore, ['fetchProfile', 'logout']),
		loadProfile() {
			this.fetchProfile()
		},
		tokenCheck() {
			if (localStorage.access_token) {
				this.access_token = localStorage.access_token
			} else {
				this.access_token = ""
			}
		},
		logoutHandler() {
			this.logout()
			this.access_token = ""
		}
	},
	created() {
		this.loadProfile()
		this.tokenCheck()
	}
}
</script>

<template>
	<nav class="navbar navbar-expand-sm navbar-light bg-white border-bottom">
		<a class="navbar-brand ml-2 font-weight-bold" href="#">DBuilder</a>
		<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor"
			aria-controls="navbarColor" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
		</button>
		<div class="collapse navbar-collapse" id="navbarColor">
			<ul class="navbar-nav">
				<li class="nav-item">
					<RouterLink class="nav-link" to="/">Card Compare</RouterLink>
				</li>
				<li class="nav-item">
					<RouterLink class="nav-link" to="/deck">Deck List</RouterLink>
				</li>
				<li class="nav-item" v-if="!this.access_token">
					<RouterLink class="nav-item nav-link" to="/login">Login</RouterLink>
				</li>
				<li class="nav-item dropdown" v-else>
					<a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
						{{ userStore.username }}
					</a>
					<ul class="dropdown-menu">
						<li><a class="dropdown-item" href="#" @click.prevent="logoutHandler">Logout</a></li>
					</ul>
				</li>
			</ul>
		</div>
	</nav>
</template>

<style>

</style>