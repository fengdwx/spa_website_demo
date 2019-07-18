module.exports = {
  storedData: {
    chart: {
      type: 'line',
      animation: true,
      duration: 3000
    },
    title: {
      text: '随机数据折线图'
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
