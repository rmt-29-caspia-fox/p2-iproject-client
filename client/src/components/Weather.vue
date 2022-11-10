<script>
import { mapState, mapActions } from 'pinia';
import { useUserStore } from '../stores/user';

export default {
    
    created() {
        this.fetchWeather()
        // this.iconHandler()
    },
    computed: {
        ...mapState(useUserStore, ['weather', 'icon'])
    },
    methods: {
        ...mapActions(useUserStore, ['fetchWeather']),

        // iconHandler() {
        //     this.icon = `https://www.weatherbit.io/static/img/icons/${this.weather.weather.icon}.png`
        // }
    },
    
}
</script>

<template>
    <div class="max-w-xs overflow-hidden rounded-lg shadow-lg px-4 py-4">
		<div class="flex items-end justify-end h-32 p-4 dark:bg-gray-500 bg-center bg-cover" style="background-image: url(https://source.unsplash.com/300x150/?skyline);">
			<p class="px-2 py-1 text-sm tracking-widest dark:text-gray-100 uppercase dark:bg-gray-800 bg-opacity-75 rounded shadow-lg">{{weather.city_name}}</p>
		</div>
		<div class="flex justify-between p-4">
			<div class="flex flex-col flex-1 gap-2">
				<div class="flex justify-between">
					<div class="flex gap-2">
						<span class="text-5xl font-semibold">{{weather.temp}}°</span>
						<span class="text-lg dark:text-gray-400">/ {{weather.app_temp}}°</span>
					</div>
					<img src="" style="width: 10px;">
				</div>
				<p class="text-sm">{{weather.datetime}}
					<br>{{Math.round(weather.wind_spd * 10)/10}} KPH winds.
				</p>
			</div>
			<div class="text-sm leading-loose">
				<div class="flex items-center"></div>
			</div>
		</div>
		<div class="flex items-center justify-between gap-8 p-4 border-t dark:text-gray-400 dark:border-gray-700">
			<div class="flex items-center space-x-1">
				<span class="font-bold">{{Math.round(weather.uv)}}</span>
				<span class="text-sm">UV</span>
			</div>
			<div class="flex items-center space-x-1">
				<span class="font-bold">{{Math.round(weather.precip * 10)/10}}%</span>
				<span class="text-sm">Precip</span>
			</div>
			<div class="flex items-center space-x-1">
				<span class="font-bold">{{Math.round(weather.dewpt)}}°</span>
				<span class="text-sm">Dew Point</span>
			</div>
		</div>
	</div>
</template>