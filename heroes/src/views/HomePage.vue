<script>
import { mapActions, mapState } from 'pinia'
import { useHeroStore } from '../stores/hero'
import { useUserStore } from '../stores/user'
import Card from '../components/Card.vue'
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../../public/leaflet.curve";

export default {
    data() {
        return {
            map: null,
            data: { role: '' }
        }
    },
    components: {
        Card
    },
    computed: {
        ...mapState(useHeroStore, ['heros']),
        ...mapState(useUserStore, ['location'])
    },
    methods: {
        ...mapActions(useHeroStore, ['fetchHero', 'fetchHeroByRole']),
        ...mapActions(useUserStore, ['getAllUser'])
    },
    created() {
        this.fetchHero()
        this.getAllUser()
    },
    // mounted() {
    //     this.map = L.map("mapContainer").setView([-6.299826, 106.8458623], 16);
    //     L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    //         attribution:
    //             '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    //     }).addTo(this.map);
    //     //use a mix of renderers
    //     var customPane = this.map.createPane("customPane");
    //     var canvasRenderer = L.canvas({ pane: "customPane" });
    //     customPane.style.zIndex = 399; // put just behind the standard overlay pane which is at 400

    //     this.location?.forEach(el => {
    //         L.marker([el.latitude, el.longitude]).addTo(this.map);
    //     })

    // },
    watch: {
        location() {
            this.map = L.map("mapContainer").setView([-2.548926, 118.0148634], 5);

            L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
                attribution:
                    '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(this.map);
            //use a mix of renderers
            var customPane = this.map.createPane("customPane");
            var canvasRenderer = L.canvas({ pane: "customPane" });
            customPane.style.zIndex = 399; // put just behind the standard overlay pane which is at 400
            this.location?.forEach(el => {
                L.marker([el.latitude, el.longitude]).addTo(this.map);
            })
        }
    },
    beforeUnmount() {
        if (this.map) {
            this.map.remove();
        }
    },
}
</script>

<template>
    <!-- Home -->
    <section class="container margin-navbar">
        <div class="row justify-content-end">
            <div class="col-4">
                <div class="input-group mb-3">
                    <select class="form-select"  v-model="role">
                        <option value="" disabled>Specially</option>
                        <option value="Initiator">Initiator</option>
                        <option value="Push">Push</option>
                        <option value="Regen">Regen</option>
                        <option value="Charge">Charge</option>
                        <option value="Damage">Damage</option>
                        <option value="Crowd Control">Crowd Control</option>
                        <option value="Poke">Poke</option>
                        <option value="Reap">Reap</option>
                        <option value="Burst Damage">Burst Damage</option>
                        <option value="Burst">Burst</option>
                        <option value="Cost">Cost</option>
                    </select>
                </div>
            </div>
            <div class="col-4">
                <div class="input-group mb-3">
                    <select class="form-select" v-model="role">
                        <option value="" disabled>Role</option>
                        <option value="Marksman">Marksman</option>
                        <option value="Tank">Tank</option>
                        <option value="Mage">Mage</option>
                        <option value="Fighter">Fighter</option>
                        <option value="Fighter">Fighter</option>
                        <option value="Fighter">Fighter</option>
                    </select>
                </div>
            </div>
        </div>
        <div class="row mb-5">
            <h5 class="col-12 text-center">User Around You</h5>
            <div class="col-12">
                <div style="border: 2px;">
                    <div id="mapContainer"></div>
                </div>
            </div>
        </div>
        <div class="clearfix"></div>
        <!-- Card -->
        <div class="row row-cols-1 row-cols-md-3 g-4">
            <Card v-for="hero in heros.hero" :hero="hero" />
        </div>
    </section>
</template>

<style scoped>
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
}

.app {
    text-align: center;
}

#mapContainer {
    width: 800;
    height: 400px;
}
</style>