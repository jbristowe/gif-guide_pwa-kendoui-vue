// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {
  Button, ButtonsInstaller
} from '@progress/kendo-buttons-vue-wrapper'
import {
  Chart, ChartInstaller
} from '@progress/kendo-charts-vue-wrapper'
import {
  DatePicker, DateinputsInstaller
} from '@progress/kendo-dateinputs-vue-wrapper'
import {
  DropDownList, DropdownsInstaller
} from '@progress/kendo-dropdowns-vue-wrapper'
import '@progress/kendo-theme-material/dist/all.css'
import '@progress/kendo-ui'

Vue.config.productionTip = false
Vue.use(ButtonsInstaller)
Vue.use(ChartInstaller)
Vue.use(DateinputsInstaller)
Vue.use(DropdownsInstaller)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: {
    App,
    Button,
    Chart,
    DatePicker,
    DropDownList
  }
})
