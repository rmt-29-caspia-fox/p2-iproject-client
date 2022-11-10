<script>
import NavbarVue from '../components/Navbar.vue';
import { mapActions, mapState } from 'pinia';
import { useUserStore } from '../stores/user';
import { useVehicleStore } from '../stores/vehicle';
export default {
    data() {
        return {
            newDuration: '',
            newStartDate: '',
            newEndDate: '',
        }
    },
    components: {
        NavbarVue
    },
    methods: {
        ...mapActions(useUserStore, ['checkAccessToken', 'userDetail']),
        ...mapActions(useVehicleStore, ['fetchVehicleDetail', 'rentHandler', 'qrCodeGenerator', 'mailer']),

        rentNow() {
            const vehicleId = this.vehicle._id
            const totalPrice = this.newDuration * this.vehicle.price * 24
            const duration = +this.newDuration
            const startDate = String(this.newStartDate)
            const endDate = String(this.newEndDate)
            this.rentHandler({vehicleId, startDate, endDate, duration, totalPrice})

            const url = `https://server-database-mongo.herokuapp.com/vehicle/rent/pay/${this.vehicle._id}`
            const qrcode = this.qrCode.qrcode
            const email = this.user.email

            this.mailer({qrcode, url, email})
            this.$router.push(`/vehicle/rent/pay/${this.vehicle._id}`)
        }


    },
    created() {
        this.checkAccessToken()
        this.fetchVehicleDetail(this.$route.params.id)
        this.qrCodeGenerator(this.$route.params.id)
        this.userDetail()
    },
    computed: {
        ...mapState(useVehicleStore, ['vehicle', 'qrCode']),
        ...mapState(useUserStore, ['baseUrl', 'user'])
    }

}
</script>

<template>
    <NavbarVue />
    <div>
        <h1 class="sr-only">Checkout</h1>

        <div class="relative mx-auto max-w-screen-2xl">
            <div class="grid grid-cols-1 md:grid-cols-2">
                <div class="bg-gray-50 py-12 md:py-24">
                    <div class="mx-auto max-w-lg px-4 lg:px-8">
                        <div class="flex items-center">
                            <span class="h-10 w-10 rounded-full bg-rose-900"></span>

                            <h2 class="ml-4 font-medium">RentalKita</h2>
                        </div>

                        <div class="mt-8">
                            <p class="text-2xl font-medium tracking-tight">Rp{{vehicle.price}}/hour</p>
                        </div>

                        <div class="mt-12">
                            <div class="flow-root">
                                <ul class="-my-4 divide-y divide-gray-200">
                                    <li class="flex items-center justify-between py-4">
                                        <div class="flex items-start">
                                            <img alt="Trainer"
                                                :src="vehicle.imageUrl"
                                                class="h-16 w-16 flex-shrink-0 rounded-lg object-cover" />

                                            <div class="ml-4">
                                                <p class="text-sm">{{vehicle.name}}</p>

                                                <dl class="mt-1 space-y-1 text-xs text-gray-500">
                                                    <div>
                                                        <dt class="inline">Seats: </dt>
                                                        <dd class="inline"> {{vehicle.seats}}</dd>
                                                    </div>

                                                    <div>
                                                        <dt class="inline">Car Type: </dt>
                                                        <dd class="inline">{{vehicle.type}}</dd>
                                                    </div>
                                                </dl>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-white py-12 md:py-24">
                    <div class="mx-auto max-w-lg px-4 lg:px-8">
                        <form class="grid grid-cols-6 gap-4" @submit.prevent="rentNow">
                            
                            <div class="col-span-6">
                                <label class="mb-1 block text-sm text-gray-600" for="duration">
                                    Duration
                                </label>

                                <input class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm" type="number"
                                    id="duration" placeholder="in days" v-model="newDuration" />
                            </div>

                            <div class="col-span-6">
                                <label class="mb-1 block text-sm text-gray-600" for="phone">
                                    Start Date
                                </label>

                                <input class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm" type="date"
                                    id="startDate" v-model="newStartDate" />
                            </div>

                            <div class="col-span-6">
                                <label class="mb-1 block text-sm text-gray-600" for="phone">
                                    End Date
                                </label>

                                <input class="w-full rounded-lg border-gray-200 p-2.5 text-sm shadow-sm" type="date"
                                    id="endDate" v-model="newEndDate" />
                            </div>
                            <div class="col-span-6">
                                <button class="block w-full rounded-lg bg-rose-500 p-2.5 text-sm text-white" type="submit">
                                    Rent Now
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>