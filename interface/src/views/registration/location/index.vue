<template>
  <div class="Location">
    <Header />
    <div class="flex-container">
      <div class="rightToLeft" style="height: 70vh">
        <div class="searchLocation g-col-6">
          <b-form-input v-model="text" placeholder="نام محله"></b-form-input>
        </div>
        <div class="addressDetailsArea rightToLeft">
          <label for="textAddress">توضیحات آدرس :</label>
          <textarea
            id="textAddress"
            placeholder="اطلاعات بیشتر را وارد نمایید . . . "
          ></textarea>
        </div>
      </div>
      <div id="lMap" class="map"></div>
    </div>
    <div class="locationDirectionArea">
      <router-link to="/reg/details">
        <b-button variant="outline-info"> صفحه بعد </b-button>
      </router-link>
    </div>
  </div>
</template>

<!-- Make sure you put this AFTER Leaflet's CSS -->
<script
  src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"
  integrity="sha512-XQoYMqMTK8LvdxXYG3nZ448hOEQiglfqkJs1NOQV44cWnUrBc8PkAOcXy20w0vlaXaVUearIOBhiXZ5V3ynxwA=="
  crossorigin=""
></script>

<script>
import Header from '../../../../layouts/Header';
import 'leaflet/dist/leaflet.css';
import L, {Icon, layerGroup} from 'leaflet';
export default {
  name: 'Location',
  components: {Header},
  data() {
    return {
      map: null,
      zoom: 13,
      center: [35.6892, 51.389],
      markerGroup: null,
      clickMarkers: null,
      cities: ['ونک', 'سلسبیل', 'نیاوران', 'نظام آباد', 'شهرک غرب'],
    };
  },

  mounted() {
    this.leafletGraph();
    this.clickMap();
  },

  methods: {
    // findAddress() {
    //   let url = 'https://nominatim.openstreetmap.org/search?q=' + 'tehran';
    //   fetch(url)
    //     .then(response => response.json())
    //     .catch(err => console.log(err));
    // },

    leafletGraph() {
      this.map = L.map('lMap').setView([35.6892, 51.389], 13);
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      }).addTo(this.map);
      this.markerGroup = L.layerGroup().addTo(this.map);
    },
    beforeDestroy() {
      if (this.map) {
        this.map.remove();
      }
    },
    clickMap() {
      this.map.on('click', ev => {
        this.markerGroup.clearLayers();
        this.clickMarkers = L.marker([ev.latlng.lat, ev.latlng.lng], {
          draggable: true,
        }).addTo(this.markerGroup);
      });
    },
  },
};
</script>

<style>
.flex-container {
  display: flex;
}

.flex-container > div {
  width: 60%;
  height: 85vh;
  padding: 10px 10px 10px 10px;
  margin: 1%;
  border: lightgray 2px solid;
}

.map {
  height: 100%;
  width: 60%;
  border-radius: 10px;
}

.rightToLeft {
  direction: rtl;
  text-align: right;
  border-radius: 10px;
}

.searchLocation {
  margin: 10% 25%;
}

.addressDetailsArea {
  margin-top: 0;
  margin-right: 20%;
  height: 50%;
  width: 60%;
}

label {
  display: block;
  margin-bottom: 10px;
}

textarea {
  display: block;
  width: 75%;
  height: 50%;
}

.locationDirectionArea {
  position: relative;
  height: 50px;
  width: 200px;
  margin: -5.5% 75% 0 0;
}
</style>
