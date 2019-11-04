import Vue from 'vue'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyDEv4wl507Xe213OC8qVcMJ4QMIPZB9odU',
    libraries: 'places'
  }
})
