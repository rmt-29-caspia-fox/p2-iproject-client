<script>
import { mapState, mapActions } from "pinia";
import { useGameStore } from "../stores/game";
import { RouterLink, RouterView } from "vue-router";

export default {
	data(){
		return {
			game: {}
		}
	},
  computed: {
    ...mapState(useGameStore, ["midToken", "games"]),
  },
  props: ["game"],
  methods: {
    ...mapActions(useGameStore, ["getTokenMid"]),
    payButton() {
      const price = 50000;
      this.getTokenMid(price);
			
    }
  },
};
</script>

<template>
  <div class="col-md-3 mb-3">
    <div 
			class="card">
        <img :src="game.imgUrl" class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">
            {{ game.name }}
          </p>
        </div>
				
    </div>
  </div>
</template>



<style>
.card-text {
  color: black;
  font-weight: bold;
  text-align: center;
}
</style>
