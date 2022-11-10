<script>
import Navbar from "../components/Navbar.vue";
import { mapActions, mapState } from "pinia";
import { useUserStore } from "../stores/user";
export default {
  data() {
    return {
      link: "",
    };
  },
  components: {
    Navbar,
  },
  computed: {
    ...mapState(useUserStore, ["profile"]),
  },
  created() {
    this.getPic();
  },
  methods: {
    ...mapActions(useUserStore, ["changePP", "getProfPic"]),
    updatePP(event) {
      let payload = {
        id: this.$route.params.id,
        profilePic: event.target.files[0].name 
      }
      console.log("masuk updatePP");
      console.log(event.target.files[0].name);
      console.log(payload);
      this.changePP(payload);
    },
    updateLink() {
      this.changePP(this.link);
    },
    getPic() {
      this.getProfPic(this.$route.params);
    },
  },
};
</script>

<template>
  <Navbar />
  <!-- bg -->
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
  <!-- bg end -->

  <div class="grid mt-40">
    <article
      class="flex justify-self-center bg-blue-500 transition hover:shadow-xl"
    >
      <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">My Profile</div>

      <div class="hidden sm:block sm:basis-56">
        <img
          v-if="profile == '-'"
          alt="Guitar"
          src="../assets/feng1.png"
          class="aspect-square h-full w-full object-cover"
        />
        <img
          v-else
          alt="Guitar"
          :src="profile"
          class="aspect-square h-full w-full object-cover"
        />
      </div>

      <div class="flex flex-1 flex-col justify-between">
        <div class="sm:flex">
          <h1 class="font-bold">CHANGE PROFILE PICTURE</h1>
        </div>
        <div class="sm:flex">
          <input
            @change="updatePP"
            type="file"
            class="block bg-yellow-300 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900"
          />
        </div>
      </div>
    </article>
  </div>
</template>
