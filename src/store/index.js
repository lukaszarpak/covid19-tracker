import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex, axios);

export default new Vuex.Store({
	state: {
		data: [],
		countries: [],
	},
	getters: {
		data: s => s.data,
		countries: s => s.countries,
	},
	mutations: {
		setData(s, data) {
			s.data = data;
		},
		setCountries(s, data) {
			s.countries = data;
		},
	},
	actions: {
		getData({ commit }, payload) {
			axios
				.get(`https://api.covid19api.com/dayone/country/${payload}`)
				.then(({ data }) => {
					commit('setData', data);
				})
				.catch(error => {
					console.log(error);
				});
		},
		getCountries({ commit }) {
			axios.get('https://api.covid19api.com/countries').then(({ data }) => {
				commit('setCountries', data);
			});
		},
	},
	modules: {},
});
