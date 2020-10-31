import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Vuex from 'vuex';
import axios from 'axios';
import { BootstrapVue } from 'bootstrap-vue';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'bootstrap/dist/css/bootstrap.css';
import VueApexCharts from 'vue-apexcharts';

Vue.use(BootstrapVue, Vuex, axios);
Vue.use(require('vue-moment'));

Vue.config.productionTip = false;

Vue.component('Apexchart', VueApexCharts);

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app');
