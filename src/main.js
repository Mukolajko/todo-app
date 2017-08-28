// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import VueResource from 'vue-resource';
import router from './router';
//globals
import globals from './config/constants';
import http from './services/http';
import helpers from './assets/js/helpers';
//import globals
Object.defineProperty(Vue.prototype, 'globals', { value: globals });
Object.defineProperty(Vue.prototype, 'http', { value: http });
Object.defineProperty(Vue.prototype, 'helpers', { value: helpers });

Vue.use(VueResource);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
