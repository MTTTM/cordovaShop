
import Vue from 'vue';
import { router } from './config/router';
import './config/rem';
import App from './App.vue';
import VueLazyload from 'vue-lazyload'
import components from './config/components.js';
import CORDOVAFN from "./forCordova/index"
Vue.use(components);
Vue.use(VueLazyload)
window.$CORDOVAFN=CORDOVAFN;
Vue.prototype.$cordovaFn=CORDOVAFN;

new Vue({
  router,
  el: '#app',
  render: h => h(App)
});