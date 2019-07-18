<template>
  <div id="StoredRandom">
    <x-chart
      :option="this.option"
      id="id"
      v-if="this.showchart == true"
    ></x-chart>
  </div>
</template>

<script>
import XChart from './charts'
export default {
  name: 'StoredRandom',
  data: function () {
    return {
      showchart: false,
      option: {
        chart: {
          type: 'line',
          animation: true,
          duration: 3000
        },
        credits: {
          enabled: false
        },
        title: {
          text: '最近存储的100条数据折线图',
          floating: false,
          margin: 50
        },
        tooltip: {
          headerFormat: '<small>random data id: {point.key}</small><table><br/>',
          pointFormat: '{series.name}: <b>{point.y}</b><br/>'
        },
        xAxis: {
          title: {
            text: 'random data'
          }
        },
        yAxis: {
          min: 0,
          max: 1000,
          title: {
            text: 'random data value'
          }
        },
        plotOptions: {
          series: {
            animation: true,
            duration: 3000
          }
        },
        series: [{
          name: 'random data value',
          data: []
        }]
      }
    }
  },
  components: {
    XChart
  },
  mounted () {
    // this.$http.get('/api/stored_data/')
    this.$http.get('/stored_data/')
      .then(response => {
        this.content = response.body
        this.stored_random_data = this.content
        this.option.series[0].data = response.body
        this.showchart = true
      }).catch(function (error) {
        this.content = error.status
        console.log(error)
      })
  }
}
</script>
<style scoped>
</style>
