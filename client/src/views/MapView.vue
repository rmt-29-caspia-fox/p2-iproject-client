<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../../public/Tween";
import "../../public/leaflet.curve";
import { mapState, mapWritableState } from "pinia";
import { useMapStore } from '@/stores/map.js'

export default {
  methods: {
    showPosition(position) {
    },
  },
  computed:{
    ...mapState(useMapStore,['storeLoc']),
    ...mapWritableState(useMapStore,['map'])
  },
  created() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
      this.message = "Geolocation is not supported by this browser.";
    }
  },
  mounted() {
    this.map = L.map("mapContainer").setView([-5.45, 105.26667], 11);
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
    //use a mix of renderers
    var customPane = this.map.createPane("customPane");
    var canvasRenderer = L.canvas({ pane: "customPane" });
    customPane.style.zIndex = 399; // put just behind the standard overlay pane which is at 400
    L.marker([this.storeLoc.latitude, this.storeLoc.longitude]).addTo(this.map);
    L.marker([]);
    // var pathOne = L.curve(["M", [50, 14], "Q", [53, 20], [49, 25]], {
    //   renderer: canvasRenderer,
    // }).addTo(this.map);
  },
  beforeUnmount() {
    if (this.map) {
      this.map.remove();
    }
  },
};
</script>

<template>
    <div class="d-flex align-items-center justify-content-center content">
        <div class="card mb-3 shadow bg-linier-1">
            <div id="mapContainer"></div>
        </div>
    </div>
</template>

<style scoped>
#mapContainer {
  width: 100%;
  height: 100%;
  border-radius: 15px;
}
</style>