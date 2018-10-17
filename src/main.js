import Vue from 'vue'
import App from './App.vue'
import './assets/main.css'
Vue.config.productionTip = false

//element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

//mixin
import {O,Oall,ajax,getStyle,throttle} from './assets/Org.js'
Vue.mixin({
  methods:{ajax,O,Oall,getStyle,throttle}
})

import router from './router'
import store from './store'


new Vue({
  render: h => h(App),
  router,
  store,
}).$mount('#app')
