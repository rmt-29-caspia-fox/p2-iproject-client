<script>
import { mapActions, mapState } from "pinia";
import { useGameStore } from "../stores/game";
import Navbar from "../components/Navbar.vue";
import Card from "../components/Card.vue";

export default {
  components: {
    Navbar,
    Card
  },
  created() {
    this.getGames();
  },
  computed:{
    ...mapState(useGameStore, ["games"])
  },
  methods: {
    ...mapActions(useGameStore, ["getGames"]),
  },
};
</script>

<template>
  <Navbar />
  <div class="fixed">
    <div
      class="bg-gray-700 bg-opacity-80 w-screen h-screen z-10 absolute top-0 left-0"
    ></div>
    <div class="grid grid-cols-4 justify-items-center">
      <img
        src="../assets/Street_Fighter_6_Battle_Hub.jpg"
        alt=""
        class="w-screen h-screen object-cover col-span-4"
      />
    </div>
  </div>
    <div class="grid grid-cols-3 justify-items-center" >
      <Card v-for="game in games" :key="game.id" :game="game"/>
    </div>
</template>

<style></style>
