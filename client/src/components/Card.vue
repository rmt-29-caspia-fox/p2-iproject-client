<script>
export default {
  props: ["game"],
};
</script>

<template>
  <div class="w-80 h-100 my-4" >
    <router-link :to="`/chatroom/${game.id}`" class="rounded-bl-3xl rounded-tr-3xl group relative flex h-96 w-full items-end bg-black">
  <img
    alt="Bike"
    :src="game.background_image"
    class="rounded-bl-3xl rounded-tr-3xl absolute inset-0 h-full w-full object-cover transition-opacity group-hover:opacity-90"
  />

  <div
    class="rounded-bl-3xl rounded-tr-3xl relative w-full bg-blue-600 p-4 text-center tracking-widest text-white transition-colors group-hover:bg-white group-hover:text-black sm:w-2/3"
  >
    <h3 class="text-lg uppercase">{{game.name}}</h3>

    <p class="mt-1 text-xs font-medium uppercase">{{game.platforms[0].platform.name}}</p>
  </div>
</router-link>

  </div>
</template>
