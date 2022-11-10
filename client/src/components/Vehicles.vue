<script>
import { mapState, mapActions } from 'pinia';
import { useVehicleStore } from '../stores/vehicle';


import VehiclesCardVue from './VehiclesCard.vue';
export default {
    components: {
        VehiclesCardVue
    },

    created() {
        this.fetchVehicles()
    },
    computed: {
        ...mapState(useVehicleStore, ['vehicles'])
    },
    methods: {
        ...mapActions(useVehicleStore, ['fetchVehicles'])
    }
}
</script>

<template>
    <div class="grid grid-cols-3 gap-8 px-10 py-12">
    <VehiclesCardVue v-for="vehicle in vehicles" :key="vehicle._id" :vehicle="vehicle" />
  </div>
</template>