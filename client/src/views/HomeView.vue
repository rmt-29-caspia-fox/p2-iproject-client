<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../../public/Tween.js";
import "../../public/leaflet.curve.js";
import { getDistance } from 'geolib'
import { mapActions, mapState } from 'pinia'
import { useSchoolStore} from '../stores/school'


export default {
  computed: {
    ...mapState(useSchoolStore, ['school'])
  },
  data() {
    return {
      map: null,
      user: {
        lat: null,
        long: null
      },
      distance : null
    };
  },
  created() {
    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    };
    navigator.geolocation.getCurrentPosition(this.success, this.error, options)
    this.getAllSchool()
    console.log(this.school);
  },
  methods: {
    ...mapActions(useSchoolStore, ['getAllSchool']),
    success(pos) {
      const crd = pos.coords;
      // console.log(crd.latitude, crd.longitude)
      this.user.lat = crd.latitude
      this.user.long = crd.longitude
    },

    error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }
  },
  watch: {
    "user.lat"() {
      this.map = L.map("mapContainer").setView([this.user.lat, this.user.long], 16);
      this.distance = getDistance(
        { latitude: this.user.lat, longitude: this.user.long },
        { latitude: -5.2057000, longitude: 106.4605000 }
      );
      L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.map);
      //use a mix of renderers
      var customPane = this.map.createPane("customPane");
      var canvasRenderer = L.canvas({ pane: "customPane" });
      customPane.style.zIndex = 399; // put just behind the standard overlay pane which is at 400
      L.marker([this.user.lat, this.user.long]).addTo(this.map);
      L.circle([this.user.lat, this.user.long], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 100
      }).addTo(this.map);
    }
  },
  beforeUnmount() {
    if (this.map) {
      this.map.remove();
    }
  },
};
</script>

<template>
  <div style="border: 2px;">
    <div id="mapContainer"></div>
  </div>
</template>


<style scoped>
#mapContainer {
  width: 300px;
  height: 500px;
}
</style>