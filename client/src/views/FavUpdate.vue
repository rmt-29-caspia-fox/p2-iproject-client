<template>
  <NavbarVue />
  <div
    class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8"
  >
    <h2>
      <span class="block">Write your Review</span>
    </h2>
    <div class="mt-10 grid grid-cols-10">
      <div class="col-start-2 col-span-3">
        <img
          :src="favData.imageUrl"
          class="w-full h-full object-center object-cover opacity-70 group-hover:opacity-100 rounded-md"
        />
      </div>
      <div class="col-start-6 col-span-4">
        <div class="card px-10 py-5 sm:px-20 sm:py-10 rounded-md">
          <form class="mt-6 mb-6 space-y-6">
            <div class="mb-5">
              <label for="power-update" class="sr-only">Power</label>
              <input
                id="power-update"
                type="text"
                autocomplete="off"
                required
                class="block w-full px-3 py-2 border rounded-sm text-purple-900 focus:outline-none focus:ring focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-lg tracking-wider"
                placeholder="Power (ex: 2200)"
                v-model="favData.power"
              />
            </div>
            <div>
              <label for="role-update" class="sr-only">Role</label>
              <select
                id="role-update"
                class="block w-full px-3 py-2 border rounded-sm text-purple-900 focus:outline-none focus:ring focus:ring-purple-500 focus:border-purple-500 focus:z-10 sm:text-lg tracking-wider"
                v-model="favData.role"
              >
                <option value="-" disabled>-- Select Role --</option>
                <option value="Jungler">Jungler</option>
                <option value="Roamer">Roamer</option>
                <option value="Mid Laner">Mid Laner</option>
                <option value="Gold Laner">Gold Laner</option>
                <option value="Exp Laner">Exp Laner</option>
              </select>
            </div>
            <div>
              <button
                type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent text-sm rounded-sm text-purple-900 bg-white bg-opacity-90 hover:bg-white hover:bg-opacity-80 focus:outline-none focus:ring focus:border-purple-500 focus:ring-purple-500 text-lg tracking-wider flex font-bold"
                @click.prevent="emitFav"
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "pinia";
import NavbarVue from "../components/Navbar.vue";
import { useCounterStore } from "../stores/counter";
export default {
  components: {
    NavbarVue,
  },
  computed: {
    ...mapState(useCounterStore, ["editfav"]),
  },
  data() {
    return {
      favData: {
        imageUrl: "",
        title: "",
        review: null,
        shortDesc: null,
      },
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["updateFav"]),
    emitFav() {
      const favId = this.$route.params.id;
      console.log(favId);
      const newPayload = {
        power: this.favData.power,
        role: this.favData.role,
      };
      this.updateFav(favId, newPayload);
      // this.$route.push("/favourites")
    },
  },
  created() {
    this.favData.imageUrl = this.editFav?.imageUrl;
    this.favData.title = this.editFav.title;
  },
};
</script>
