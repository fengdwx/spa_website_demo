<template>
  <div id="NewRandom">
    <x-chart
      :option="this.option"
      id="id"
      :http_get="this.$http"
      width="244px"
      height="244px"
      v-if="this.showchart == true"
    ></x-chart>
    <br />
    <br />
    <el-button type="primary" @click="save">保存当前数据</el-button>
  </div>
</template>

<script>
import XChart from './charts'
export default {
  name: 'NewRandom',
  data: function () {
    let httpGet = this.$http
    return {
      random_data_list: '',
      random_data_list_id: '',
      showchart: false,
      option: {
        chart: {
          type: 'line',
          animation: true,
          duration: 3000,
          events: {
            load: function () { // 图表加载完成后，对图片进行刷新
              var series = this.series
              setInterval(function () {
                // httpGet.get('/api/random_data/new')
                httpGet.get('/random_data/new')
                  .then(function (response) {
                    this.content = response.body
                    this.random_data_list = this.content.random_data_list
                    this.random_data_list_id = this.content.random_data_list_id
                    series[0].update({
                      data: this.random_data_list
                    })
                  })
              }, 1000 * 10)
            }
          }
        },
        credits: { enabled: false },
        title: {
          text: '随机数据折线图',
          margin: 50
        },
        tooltip: {
          headerFormat: '<small>{point.key}</small><table>',
          pointFormat: '{series.name}: <b>{point.y}</b><br/>'
        },
        xAxis: {
          title: {
            text: 'random data'
          },
          categories: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          allowDecimals: false
          // minPadding: 1
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
  methods: {
    readCookie (name) {
      var nameEQ = name + '='
      var ca = document.cookie.split(';')
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i]
        while (c.charAt(0) === ' ') c = c.substring(1, c.length)
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
      }
      return null
    },
    save () {
      console.log(this.random_data_list_id)
      // this.$http.post('/api/random_data/save', { list_id: this.random_data_list_id }, { emulateJSON: true })
      this.$http.post('/random_data/save', { list_id: this.random_data_list_id }, { emulateJSON: true })
        .then(response => {
          this.content = response.status
          this.$notify({
            title: '成功',
            message: '数据保存成功',
            type: 'success'
          })
          // alert('保存成功！')
          console.log(this.content)
        })
        .catch(function (error) {
          this.content = error.status
          this.$notify.error({
            title: '错误',
            message: '保存失败，请稍后重试！'
          })
          // alert('保存失败，请稍后重试！')
          console.log(error.status)
        })
    },
    new_data () {
      // this.$http.get('/api/random_data/new')
      this.$http.get('/random_data/new')
        .then(function (response) {
          this.content = response.body
          this.random_data_list = this.content.random_data_list
          this.random_data_list_id = this.content.random_data_list_id
          this.option.series[0].data = this.random_data_list
          this.showchart = true
        })
        .catch(function (error) {
          this.content = error.status
          console.log(error)
        })
    }
  },
  mounted () {
    this.new_data()
  }
}
</script>
<style scoped>
.el-button {
  margin-left: 80%;
}
</style>
