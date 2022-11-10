<script>
export default {
    props: ['vehicle'],
    methods: {
        // currencyUSD() {

        // },

        detailPage(id) {
            this.$router.push(`/vehicle/detail/${id}`)
        }

    },
}
</script>

<template>
    <button @click.prevent="detailPage(vehicle._id)" class="block rounded-lg p-4 shadow-sm shadow-indigo-100">
        <img alt="Home" :src="vehicle.imageUrl" class="h-56 w-full rounded-md object-cover" />
        <div class="mt-2">
            <dl>
                <div>
                    <dt class="sr-only">Price</dt>

                    <dd class="text-sm text-gray-500">Rp {{ vehicle.price }}/hour</dd>
                </div>

                <div>
                    <dt class="sr-only">Name</dt>

                    <dd class="font-medium">{{ vehicle.name }}</dd>
                </div>
            </dl>

            <div class="mt-6 flex items-center gap-8 text-xs">
                <div class="sm:inline-flex sm:shrink-0 sm:items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="h-4 w-4 text-rose-700">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.666 3.888A2.25 2.25 0 0013.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 01-.75.75H9a.75.75 0 01-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 01-2.25 2.25H6.75A2.25 2.25 0 014.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 011.927-.184" />
                    </svg>


                    <div class="mt-1.5 sm:ml-3 sm:mt-0">
                        <p class="text-gray-500">Brand</p>

                        <p class="font-medium">{{ vehicle.brand }}</p>
                    </div>
                </div>

                <div class="sm:inline-flex sm:shrink-0 sm:items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="h-4 w-4 text-rose-700">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>


                    <div class="mt-1.5 sm:ml-3 sm:mt-0">
                        <p class="text-gray-500">Seats</p>

                        <p class="font-medium">{{ vehicle.seats }}</p>
                    </div>
                </div>

                <div class="sm:inline-flex sm:shrink-0 sm:items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="h-4 w-4 text-rose-700">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                    </svg>


                    <div class="mt-1.5 sm:ml-3 sm:mt-0">
                        <p class="text-gray-500">Year</p>

                        <p class="font-medium">{{ vehicle.year }}</p>
                    </div>
                </div>
            </div>
        </div>
    </button>

</template>