<template>
  <div class="container my-5">
    <apexchart type="area" height="500" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  props: {
    infected: Array,
    recovered: Array,
    deaths: Array,
    categories: Array
  },
  computed: {
    series() {
      return [
        {
          name: "Infected",
          data: this.infected
        },
        {
          name: "Recovered",
          data: this.recovered
        },
        {
          name: "Deaths",
          data: this.deaths
        }
      ];
    },
    chartOptions() {
      return {
        chart: {
          height: 500,
          type: "area"
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: "smooth"
        },
        xaxis: {
          type: "datetime",
          categories: this.categories
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm"
          }
        }
      };
    }
  }
  /* data: () => ({
    series: [
      {
        name: "Infected",
        data: [21, 30, 18, 41, 42, 89, 90]
      }
    ],
    
  }) */
};
</script>