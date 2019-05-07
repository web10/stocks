<template>
  <v-container fluid>
    <v-layout>
      <v-flex xs12>
        <h1 class="text-xs-center">
          Watch List
        </h1>
        <v-flex xs12 sm2 d-flex>
          <v-select
            :items="symbolList"
            label="Symbol"
            @change="fetchSymbolData($event)"
          ></v-select>
        </v-flex>
        <br/>
        <div id="chart" v-if="series1">
          <apexcharts width="100%" :options="chartOptions" :series="series1"></apexcharts>
        </div>
        <div id="chart" v-if="series2">
          <apexcharts width="100%" :options="chartOptions" :series="series2"></apexcharts>
        </div>
        <div id="chart" v-if="series3">
          <apexcharts width="100%" :options="chartOptions" :series="series3"></apexcharts>
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
        series1: [],
        series2: [],
        series3: [],
        symbolList: ['MSFT', 'DIA', 'QQQ', 'IWM', 'AAPL'],
        chartOptions: {
          xaxis: {
            type: 'datetime',
            labels: {
              borderColor: '#775DD0',
              style: {
                colors: 'yellow',
                fontSize: '14px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                cssClass: 'apexcharts-xaxis-label'
              }
            }
          },
          yaxis: {
            show: true,
            showAlways: true,
            labels: {
              show: true,
              align: 'right',
              style: {
                colors: '#43BCCD',
                fontSize: '14px',
                fontFamily: 'Helvetica, Arial, sans-serif',
                cssClass: 'apexcharts-yaxis-label'
              }
            }
          },
          tooltip: {
            enabled: true,
            shared: true,
            style: {
              fontSize: '12px'
            },
            theme: 'dark'
          }
        }
      }
    },
    created () {
      this.fetchStocks()
    },
    methods: {
      fetchSymbolData (symbol) {
        console.log(symbol)
      },
      fetchStocks () {
        this.$store.dispatch('getChartData').then(list => {
          let tempTS = []
          let tempRSI = []
          let tempSMA = []
          let posSMA
          let posRSI
          let volume = []
          list.timeSeries.forEach((TS, index) => {
            var array = Object.values(list.timeSeries[index].value)
            array = array.map(Number)
            posRSI = list.rsi.map(e => e.date).indexOf(TS.date)
            posSMA = list.sma.map(e => e.date).indexOf(TS.date)

            if (posRSI > -1 && posSMA > -1) {
              volume.push({
                x: new Date(TS.date),
                y: array.pop()
              })
              tempTS.push({
                x: new Date(TS.date),
                y: array
              })
              tempRSI.push({
                x: new Date(TS.date),
                y: parseFloat(list.rsi[posRSI]['value']['RSI'])
              })
              tempSMA.push({
                x: new Date(TS.date),
                y: parseFloat(list.sma[posSMA]['value']['SMA'])
              })
            }
          })

          this.series1 = [{
            name: 'Price',
            type: 'candlestick',
            data: tempTS
          }, {
            name: 'SMA',
            type: 'line',
            data: tempSMA
          }]

          this.series2 = [{
            name: 'RSI',
            type: 'line',
            data: tempRSI
          }]

          this.series3 = [{
            name: 'Volume',
            type: 'column',
            data: volume
          }]
        })
      }
    }
  }
</script>
<style>
  .apexcharts-tooltip {
    background: #f3f3f3;
    color: orange;
  }

  .apexcharts-yaxis-label, .apexcharts-title-text {
    fill: #fff !important;
  }

  .apexcharts-legend-series span {
    color: #fff !important;
    font-size: 16px !important;
  }
</style>

