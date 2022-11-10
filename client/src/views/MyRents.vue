<script>
import { mapActions, mapState } from 'pinia';
import { useUserStore } from '../stores/user';
import NavbarVue from '../components/Navbar.vue';

export default {
    components: {
        NavbarVue
    },
    created() {
        this.fetchMyRents()
    },
    computed: {
        ...mapState(useUserStore, ['myRents'])
    },

    methods: {
        ...mapActions(useUserStore, ['fetchMyRents'])
    }

}
</script>

<template>
    <NavbarVue />

    <div class="grid grid-cols-1 px-8 py-12" v-for="myRent in myRents.rents" :key="myRent.vehicleId">
        <article class="flex bg-white transition hover:shadow-xl justify-center">
            <div class="rotate-180 p-2 [writing-mode:_vertical-lr]">
                <time datetime="2022-10-10"
                    class="flex items-center justify-between gap-4 text-xs font-bold uppercase text-gray-900">
                    <span>{{myRent.startDate}}</span>
                    <span class="w-px flex-1 bg-gray-900/10"></span>
                    <span>{{myRent.endDate}}</span>
                </time>
            </div>
            <div class="flex flex-1 flex-col justify-between">
                <div class="border-2 border-l border-gray-900/10 p-4 sm:border-l sm:p-6">

                    <h3 class="font-bold uppercase text-gray-900">
                        {{myRents.name}}
                    </h3>

                    <h5 class="font-bold uppercase text-gray-900">
                        Car Id: {{myRent.vehicleId}}
                    </h5>
                    
                    
                    <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                        Duration : {{myRent.duration}}
                    </p>
                    <p class="mt-2 text-sm leading-relaxed text-gray-700 line-clamp-3">
                        Total Price : {{myRent.totalPrice}}
                    </p>
                </div>

                <div class="sm:flex sm:items-end sm:justify-end" v-if="!myRent.paymentStatus">
                    <a href="#"
                        class="block bg-rose-500 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-rose-300">
                        Unpaid
                    </a>
                </div>
                <div class="sm:flex sm:items-end sm:justify-end" v-if="myRent.paymentStatus">
                    <a href="#"
                        class="block bg-green-500 px-5 py-3 text-center text-xs font-bold uppercase text-gray-900 transition hover:bg-green-300">
                        Paid
                    </a>
                </div>
            </div>
        </article>
    </div>
</template>