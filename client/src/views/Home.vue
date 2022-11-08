<script>
import { mapActions} from 'pinia'
import { useGameStore } from '../stores/game'

export default {
	data (){
		return {
			
		}
	},
	created(){
		this.getGames()
	},
	methods: {
		...mapActions(useGameStore,['getGames']),
		formLogin(){
			const payload = {
				email: this.email,
				password: this.password
			}
			this.loginHandler(payload)
		}
	}
}
</script>

<template>
	<div>
		<h1>Home Page</h1>
	</div>
</template>
