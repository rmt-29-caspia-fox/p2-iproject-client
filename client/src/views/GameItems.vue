<script>
import { mapActions, mapState, mapWritableState } from "pinia";
import { handleError } from "vue";
import { useGameStore } from "../stores/game";

export default {
  data() {
    return {
      gameId: 0,
      gameF: [],
			gameName: {}
    };
  },
  computed: {
    ...mapWritableState(useGameStore, ["gameItems", "gameId",'games']),
  },
  methods: {
    ...mapActions(useGameStore, ["getGameItems",'getTokenMid']),
    filterGame() {
      const game = this.gameItems;
      const id = this.gameId;
      // console.log({id, game});
    },
		payButton(price) {
      // const price = 50000;
      // this.getTokenMid(price);
			// console.log(price);
			this.getTokenMid(price);
    }
  },
  created() {
    this.getGameItems();
    this.filterGame();
  },
  watch: {
    "$route.params": {
      handler(paramsId) {
        const game = this.gameItems;
				const games = this.games
        const id = paramsId.id;
        this.gameF = game.filter((g) => g.GameId == +id);
      },
      immediate: true,
    },
  },
};
</script>

<template>
  <div class="container mt-4">
    <div class="row">
			<div v-for="game in gameF" :key="game.id">
				<form @submit.prevent="payButton(game.price)">
        <div class="col-md-3 mb-3">
          <div class="card">
            <img
              src="https://cdn1.codashop.com/S/content/common/images/denom-image/MLBB/100x100/50orless_MLBB_Diamonds.png"
              class="card-img-top img-item"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text">
                {{ game.item }} Diamonds
              </p>
            </div>
						<!-- @click.prevent="payButton" -->
						<button 
							
							id="pay-button" class="btn btn-primary">Bayar</button>
          </div>
        </div>
			</form>
      </div>
      <!-- <div v-for="game in gameF">
		<h1>{{game.price}}</h1>
	</div> -->
    </div>
  </div>
</template>


<style>
.img-item {
	width: 50px;
	height: 50px;
}

.card {
}
</style>