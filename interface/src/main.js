import {
  BootstrapVue, FormRadioPlugin, IconsPlugin
} from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css';
import JQuery from 'jquery';
import { Icon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
window.$ = JQuery





delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(FormRadioPlugin)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
