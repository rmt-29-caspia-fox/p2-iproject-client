<script>
import Navbar from "../components/Navbar.vue";
import { mapActions, mapStores } from "pinia";
import { useUserStore } from "../stores/user";
export default {
  components: {
    Navbar,
  },
  computed: {
    ...mapStores(useUserStore, []),
  },
  methods: {
    ...mapActions(useUserStore, ["changePP"]),
    change() {},
  },
};
</script>

<template>
  <Navbar />
  <div class="fixed -z-10">
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

  <div class="mt-40">
    <article
      class="flex justify-self-center bg-white transition hover:shadow-xl"
    >
      <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">My Profile</div>

      <div class="hidden sm:block sm:basis-56">
        <img
          alt="Guitar"
          src=""
          class="aspect-square h-full w-full object-cover"
        />
      </div>

      <div class="flex flex-1 flex-col justify-between">
        <div class="sm:flex">
            <form @submit.prevent=""></form>
          <input
            type="file"
            class="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900"
          />
        </div>
      </div>
    </article>
  </div>
</template>
