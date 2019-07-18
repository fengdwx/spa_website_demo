<template>
  <div class="x-bar">
    <div :id="id" :option="option"></div>
  </div>
</template>

<script>
import HighCharts from 'highcharts'
// import options from '../chart-options/options'
// var optionsObj = options.lines
export default {
  // name: 'XChart',
  props: {
    id: {
      type: String
    },
    // option: optionsObj
    option: {
      type: Object
    },
    httpGet: {
      type: Object,
      default: null
    }
  },
  // data: function () {
  //   return {
  //     id: {
  //       type: String
  //     },
  //     option: optionsObj
  //   }
  // },
  watch: {
    option () {
      HighCharts.chart(this.id, this.option)
    }
  },
  mounted () {
    HighCharts.chart(this.id, this.option)
  }

}
</script>

<style scoped>
</style>
