<template>
	<div class="container">
		<p class="mt-4 mb-2">Select a country</p>
		<b-form-select
			v-model="selected"
			:options="options"
			class="mb-4"
		></b-form-select>
		<b-card-group deck class="mb-5">
			<b-card
				bg-variant="primary"
				text-variant="white"
				header="Total Infected"
				class="mt-2 text-center"
				:footer="lastDay.Date.toString() | moment('MMMM Do YYYY, (dddd)')"
				:title="lastDay.Confirmed.toString()"
				style="min-width: 200px;"
			>
				<b-card-text>Confirmed cases in {{ lastDay.Country }}</b-card-text>
			</b-card>
			<b-card
				bg-variant="success"
				text-variant="white"
				header="Total Recovered"
				class="mt-2 text-center"
				:footer="lastDay.Date.toString() | moment('MMMM Do YYYY, (dddd)')"
				:title="lastDay.Recovered.toString()"
				style="min-width: 200px;"
			>
				<b-card-text>Recovered cases in {{ lastDay.Country }}</b-card-text>
			</b-card>
			<b-card
				bg-variant="warning"
				text-variant="white"
				header="Total Deaths"
				class="mt-2 text-center"
				:footer="lastDay.Date.toString() | moment('MMMM Do YYYY, (dddd)')"
				:title="lastDay.Deaths.toString()"
				style="min-width: 200px;"
			>
				<b-card-text>Deaths cases in {{ lastDay.Country }}</b-card-text>
			</b-card>
		</b-card-group>
		<Chart
			:infected="chartSeriesInfected"
			:recovered="chartSeriesRecovered"
			:deaths="chartSeriesDeaths"
			:categories="chartCategories"
		/>
	</div>
</template>

<script>
import Chart from '@/components/Chart.vue';
import { mapGetters, mapActions } from 'vuex';
export default {
	data: () => ({
		today: new Date().toLocaleString(),
		selected: 'poland',
	}),
	components: {
		Chart,
	},
	methods: {
		...mapActions(['getData', 'getCountries']),
	},
	computed: {
		...mapGetters(['data', 'countries']),
		lastDay() {
			return this.dailyData[this.dailyData.length - 1];
		},
		dailyData() {
			return this.data;
		},
		options() {
			const populated = this.countries.map(country => {
				const val = {
					value: country.Country,
					text: country.Country,
				};
				return val;
			});
			return populated;
		},
		chartSeriesInfected() {
			const series = this.data.map(day => day.Confirmed);
			return series;
		},
		chartSeriesRecovered() {
			const series = this.data.map(day => day.Recovered);
			return series;
		},
		chartSeriesDeaths() {
			const series = this.data.map(day => day.Deaths);
			return series;
		},
		chartCategories() {
			const categories = this.data.map(day => day.Date);
			return categories;
		},
	},
	mounted() {
		this.getData('poland');
		this.getCountries();
	},
	watch: {
		selected: function() {
			this.getData(this.selected);
		},
	},
};
</script>

<style scoped></style>
