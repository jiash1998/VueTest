import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from "axios"; //axios
import qs from "qs";

import myPlugins from "./util/plugins.js";

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(myPlugins);
Vue.use(axios);

new Vue({
  store,
  router,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this;
  }
}).$mount('#app')
