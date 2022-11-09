<script>
import { mapState, mapActions } from 'pinia';
import { useUserStore } from '../stores/user';
import { useVehicleStore } from '../stores/vehicle';


import NavbarVue from '../components/Navbar.vue';

export default {
    components: {
        NavbarVue
    },

    created() {
        this.checkAccessToken()
        this.fetchVehicleDetail(this.$route.params.id)
    },

    computed: {
        ...mapState(useVehicleStore, ['vehicle'])
    },

    methods: {
        ...mapActions(useVehicleStore, ['fetchVehicleDetail']),
        ...mapActions(useUserStore, ['checkAccessToken'])

    }
}
</script>

<template>
    <NavbarVue />
    <!-- Body card -->
    <div>
        <section>
            <div class="mx-auto max-w-screen-2xl px-4 py-16 sm:px-6 lg:px-8">
                <div class="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
                    <div class="relative z-10 lg:py-16">
                        <div class="relative h-64 sm:h-80 lg:h-full">
                            <img alt="House" :src="vehicle.imageUrl"
                                class="absolute inset-0 h-full w-full object-cover" />
                        </div>
                    </div>

                    <div class="relative flex items-center bg-gray-100">
                        <span
                            class="hidden lg:absolute lg:inset-y-0 lg:-left-16 lg:block lg:w-16 lg:bg-gray-100"></span>

                        <div class="p-8 sm:p-16 lg:p-24">
                            <h2 class="text-2xl font-bold sm:text-3xl">
                                {{ vehicle.brand }} {{ vehicle.name }}
                            </h2>

                            <p class="mt-4 text-gray-600">
                                Transimission : {{ vehicle.transmission.join(', ') }}
                            </p>
                            <p class="mt-4 text-gray-600">
                                Total Seats : {{ vehicle.seats }}
                            </p>
                            <p class="mt-4 text-gray-600">
                                Car Type : {{ vehicle.type }}
                            </p>
                            <p class="mt-4 text-gray-600">
                                Released Year : {{ vehicle.year }}
                            </p>
                            <p class="mt-4 text-gray-600">
                                Rates : Rp{{ vehicle.price }}/hour
                            </p>

                            <a href="#"
                                class="mt-8 mr-3 inline-block rounded border border-rose-500 bg-rose-500 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-rose-600 focus:outline-none focus:ring active:text-rose-500">
                                Rent Now
                            </a>

                            <a href="#"
                                class="mt-8 inline-block rounded border border-rose-500 bg-white-500 px-12 py-3 text-sm font-medium text-rose-500 hover:bg-rose-500 hover:text-white focus:outline-none focus:ring active:text-rose-500">
                                Review
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>

    <!-- Review Section -->
    <div>
        <section class="bg-white">
            <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
                <h2 class="text-center text-4xl font-bold tracking-tight sm:text-5xl">
                    Read trusted reviews from our customers
                </h2>

                <div class="grid grid-cols-3 gap-8 px-24 py-12">
                    <blockquote class="rounded-lg bg-gray-100 p-8" v-for="review in vehicle.reviews" :key="vehicle._id" >
                        <div class="flex items-center">
                            <div class="ml-4">
                                <div class="flex justify-center gap-0.5 text-green-500">
                                    <p>{{review.rating}}/10</p>
                                </div>

                                <p class="mt-1 text-lg font-medium text-gray-700">{{review.name}}</p>
                            </div>
                        </div>

                        <p class="mt-4 text-gray-500">{{review.msg}}</p>
                    </blockquote>
                </div>
            </div>
        </section>
    </div>
</template>

