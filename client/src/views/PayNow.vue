<script>
import { mapActions, mapState } from 'pinia';
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
        this.payNowDetail(this.$route.params.id)
    },

    computed: {
        ...mapState(useVehicleStore, ['vehicle', 'payDetail'])
    },
    methods: {
        ...mapActions(useUserStore, ['checkAccessToken']),
        ...mapActions(useVehicleStore, ['fetchVehicleDetail', 'payNowDetail'])
    }

}
</script>

<template>
    <NavbarVue />
    <div class="grid grid-cols-1 px-8 py-12 ">
        <article class="flex bg-white transition hover:shadow-xl justify-center">
        <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
            <time datetime="2022-10-10"
                class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900">
                <span>{{payDetail.toPay[0].startDate}}</span>
                <span class="w-px flex-1 bg-gray-900/10"></span>
                <span>{{payDetail.toPay[0].endDate}}</span>
            </time>
        </div>

        <div class="hidden sm:block sm:basis-56">
            <img alt="Guitar"
                :src="vehicle.imageUrl"
                class="aspect-square h-full w-full object-cover" />
        </div>

        <div class="flex flex-1 flex-col justify-between">
            <div class="border-l border-gray-900/10 p-4 sm:border-l-transparent sm:p-6">
                
                    <h3 class="font-bold uppercase text-gray-900">
                        {{vehicle.brand}} {{vehicle.name}}
                    </h3>
                    <h5 class="font-bold uppercase text-gray-900">
                        {{payDetail.user}}
                    </h5>
            

                <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                    Duration : {{payDetail.toPay[0].duration}} days
                </p>
                <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                    Total Price : Rp{{payDetail.toPay[0].totalPrice}}
                </p>
            </div>

            <div class="sm:flex sm:items-end sm:justify-end">
                <a href="#"
                    class="block bg-rose-500 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-rose-300">
                    Pay Now
                </a>
            </div>
        </div>
    </article>
    </div>
</template>