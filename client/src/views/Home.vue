<script>
import { mapActions,mapWritableState } from "pinia";
import { useGameStore } from "../stores/game";
import GameCard from '../components/GameCard.vue'



export default {
	data(){
		return {
			gameId: []
		}
	},
	components: {
		GameCard
	},
	computed: {
		...mapWritableState(useGameStore,['games','gameItems','gameId'])
	},
  data() {
    return {};
  },
  created() {
    this.getGames();
		this.getGameItems()
		
  },
  methods: {
    ...mapActions(useGameStore, ["getGames",'getGameItems']),
		toItems(id) {
			const payload = this.gameItems
			this.gameId = id
			this.gameId = payload.filter(g => g.GameId == id)
			// console.log(this.gameId);
			this.$router.push(`/items/${id}`)

    },
  },
};
</script>

<template>
	
	<div class="container mt-4">
		<h1 class="mb-4" id="gameList">Game List</h1>
		<div class="row">
    <GameCard 
			v-for="game in games"
			:game="game"
			@click="toItems(game.id)"
		/>
	</div>
  </div>
</template>

<style>
#gameList {
	/* font-size: large; */
	font-weight: bolder;
}
</style>