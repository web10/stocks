<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12>
        <h1 class="text-xs-center">
          Watch List
        </h1>
        <div id="chart" v-if="series">
          <apexcharts width="100%" type="candlestick" :options="chartOptions" :series="series"></apexcharts>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  import VueApexCharts from 'vue-apexcharts'
  export default {
    name: 'home-page',
    components: {
      apexcharts: VueApexCharts
    },
    data () {
      return {
        stockList: [],
        series: [],
        chartOptions: {
          title: {
            text: 'CandleStick Chart',
            align: 'left'
          },
          xaxis: {
            type: 'datetime',
            labels: {
              borderColor: '#775DD0',
              style: {
                colors: 'yellow'
              }
            }
          },
          yaxis: {
            labels: {
              borderColor: '#775DD0',
              style: {
                colors: 'yellow'
              }
            }
          }
        }
      }
    },
    created () {
      this.fetchStocks()
    },
    methods: {
      fetchStocks () {
        this.$store.dispatch('getChartData').then(list => {
          this.stockList = list
          let temp = []
          this.stockList.forEach(stock => {
            let arr = []
            let i = 0
            for (var key in stock.value) {
              if (stock.value.hasOwnProperty(key) && i < 4) {
                arr.push(parseInt(stock.value[key]))
                i++
              }
            }
            temp.push({
              x: new Date(stock.date),
              y: arr
            })
          })
          this.series = [{
            data: temp
          }]
        })
      }
    }
  }
</script>
