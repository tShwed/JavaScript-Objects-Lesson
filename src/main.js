import Vue from 'vue'
import App from './App'

import VueAnalytics from 'vue-analytics'
//Bootstrap
import BootstrapVue from 'bootstrap-vue'
//import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//CodeMirror
import VueCodemirror from 'vue-codemirror'
import 'codemirror/lib/codemirror.css'
Vue.use(VueCodemirror);

Vue.use(BootstrapVue);

Vue.use(VueAnalytics, {
  id: 'UA-80578729-1',
  autoTracking: {
    screenview: true
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
