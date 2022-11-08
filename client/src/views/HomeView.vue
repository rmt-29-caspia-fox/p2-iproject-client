<template>
  <pre>{{ user }}</pre>
  <div style="border: 2px;">
    <div id="mapContainer"></div>
  </div>
</template>

<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../../public/Tween.js";
import "../../public/leaflet.curve.js";

export default {
  name: "LeafletMap",
  data() {
    return {
      map: null,
      user: {
        lat: null,
        long: null
      }
    };
  },
  created() {
    // const options = {
    //   enableHighAccuracy: true,
    //   timeout: 5000,
    //   maximumAge: 0
    // };
    
    // navigator.geolocation.getCurrentPosition(this.success, this.error, options)
  },
  methods: {
    success(pos){
      const crd = pos.coords;
      console.log(crd.latitude, crd.longitude)
      this.user.lat = crd.latitude
      this.user.long = crd.longitude
      // console.log('Your current position is:');
      // console.log(`Latitude : ${crd.latitude}`);
      // console.log(`Longitude: ${crd.longitude}`);
      // console.log(`More or less ${crd.accuracy} meters.`);
    },

    error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
  },
  mounted() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    
    navigator.geolocation.getCurrentPosition(this.success, this.error, options)

    if(this.user.lat){
      this.map = L.map("mapContainer").setView([this.user.lat, this.user.long], 18);
      L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.map);
      //use a mix of renderers
      var customPane = this.map.createPane("customPane");
      var canvasRenderer = L.canvas({ pane: "customPane" });
      customPane.style.zIndex = 399; // put just behind the standard overlay pane which is at 400
      L.marker([-5.7985000, 106.5003000]).addTo(this.map);
      L.circle([-5.7985000, 106.5003000], { radius: 200 }).addTo(this.map);
    }
  },
  beforeUnmount() {
    if (this.map) {
      this.map.remove();
    }
  },
};
</script>

<style scoped>
#mapContainer {
  width: 300px;
  height: 500px;
}
</style>