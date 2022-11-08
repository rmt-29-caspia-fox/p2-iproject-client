<script>
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "../../public/Tween";
import "../../public/leaflet.curve";


export default {
  data() {
    return {
      map: null,
      storeLoc: {
        latitude: -5.354929305755995,
        longitude: 105.30084972794684,
      },
    };
  },
  components: {
    
  },
  mounted() {
    this.map = L.map("mapContainer").setView([-5.450000, 105.266670], 11);
    L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
    //use a mix of renderers
    var customPane = this.map.createPane("customPane");
    var canvasRenderer = L.canvas({ pane: "customPane" });
    customPane.style.zIndex = 399; // put just behind the standard overlay pane which is at 400
    L.marker([this.storeLoc.latitude, this.storeLoc.longitude]).addTo(this.map);

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
      <div class="row g-0 inside-card p-3">
        <div class="col-md-4 col-12">
          <img
            src="https://portagecarwashin.com/wp-content/uploads/sites/799/2018/05/bg.png"
            class="img-fluid rounded-start"
            alt="..."
          />
        </div>
        <div class="col-md-8 col-12 text-light">
          <div class="card-body">
            <h5 class="card-title" style="font-size: 8rem;"><strong>Welcome</strong></h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <p class="card-text"><a class="link"> click Here </a> to book</p>
          </div>
        </div>
        <div class="col-md-10 col-12">
          <div id="mapContainer"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
#mapContainer {
  width: 100%;
  height: 400px;
}
</style>
