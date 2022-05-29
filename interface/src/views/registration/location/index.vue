<template>
  <div class="Location">
    <Header />
    <div class="flex-container">
      <div class="rightToLeft" style="height: 60vh">
        <div class="searchLocation g-col-6">
          <b-form-select :options="options" v-model="selected" @change="goToNewLocation()"> </b-form-select>
        </div>
        <div class="addressDetailsArea rightToLeft">
          <label for="textAddress">توضیحات آدرس :</label>
          <textarea
            id="textAddress"
            placeholder="اطلاعات بیشتر را وارد نمایید . . . "
          ></textarea>
        </div>
      </div>
      <div id="lMap" class="map" :zoom="zoom"></div>
    </div>
    <div class="locationDirectionArea">
      <router-link to="/reg/images">
        <b-button variant="outline-info"> صفحه بعد </b-button>
        <b-button class="exitButton" variant="light" to="/"> خروج </b-button>
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
import Header from '../../../../layouts/HeaderWithoutButton';
import 'leaflet/dist/leaflet.css';
import L, {Icon, layerGroup} from 'leaflet';
export default {
  name: 'Location',
  components: {Header},
  data() {
    return {
      map: null,
      maxzoom: 30,
      zoom: 17,
      center: [35.700847, 51.391025],
      markerGroup: null,
      clickMarker: [null, null],
      selected: null,
      options: [
        {text: 'محله های تهران . . .', value: null},
        {text: 'نیاوران', value: [35.817723, 51.471472]},
        {text: 'قلهک', value: [35.773866, 51.444088]},
      ],
    };
  },

  mounted() {
    this.leafletGraph();
    this.addMarker();
  },

  methods: {
    leafletGraph() {
      this.map = L.map('lMap').setView(this.center, this.zoom);
      L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">محله</a>Tehran',
      }).addTo(this.map);
    },

    addMarker() {
      this.map.on('click', ev => {
        if(this.clickMarker != null) {
          this.map.removeLayer(this.clickMarker);
        }
        this.clickMarker = new L.marker([ev.latlng.lat, ev.latlng.lng], {
          draggable: true,
        }).addTo(this.map);
                  alert(clickMarker)
      });
    },
    goToNewLocation() {
      this.map.flyTo(this.selected, 17);
      }
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
  margin: 50px 200px;
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
  margin: -110px 0 0 40px;
}

.districtSelect {
  width: 100%;
  margin-left: 10px;
  margin-top: 100px;
}

.exitButton {
  margin-left: 10px;
  color: red;
}

body {
  font-family: Vazir;
}
</style>
