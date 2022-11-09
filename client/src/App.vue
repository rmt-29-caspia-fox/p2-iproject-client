<script>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'

export default {
	components: {
		Navbar
	}
}
</script>

<template>

	<Navbar />
      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
			<div class="container">
				<h1 class="judul">Hacktiv Shop</h1>

			</div>
  <RouterView />
</template>

<style>
.judul {
}
</style>
