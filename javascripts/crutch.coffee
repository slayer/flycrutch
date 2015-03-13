class @Chart
  constructor: (@name, @data) ->
    @series = []
    @loadData =>
      @show()

  fields: =>
    if @data.select?.fields?.join?
      @data.select.fields
    else
      [@data.select.fields]


  query: =>
    fields = @fields().join(', ')
    "SELECT host, mac, #{fields} FROM srach GROUP BY time(5m) WHERE mac =~ /^18FE349E.*/ AND time > NOW() - 3h;"

  loadData: (cb) =>
    influxdb.query @query(), (points) =>
      nodes = _.groupBy points, (point) -> point.host
      series = {}

      _.each nodes, (points, host) =>
        # console.log "#{host} points: ", points
        _.each @fields(), (field) =>
          name = "#{host} - #{field}"
          series[name] ||= name: name, data: []

      _.each nodes, (points, host) =>
        data = _.each points, (point) =>
          _.each @fields(), (field) =>
            name = "#{point.host} - #{field}"
            series[name].data.push [point.time.getTime(), point[field]]

      # Fill @series if data present
      for name, serie of series
        if _.find(serie.data, (item) -> !!item[1])
          @series.push serie

      cb() if cb?


  show: =>
    div = $('<div>').addClass("chart")
    $("#content").append div

    params =
      chart:
        renderTo: div[0]
        type: 'spline'
        height: 550
      title: text: @data.chart.title
      xAxis: type: 'datetime'
      tooltip:
        crosshairs: true
        valueSuffix: ' bytes'
      legend:
        layout: 'vertical'
        align: 'right'
        verticalAlign: 'middle'
        borderWidth: 1
      series: @series

    # console.log "params: ", params
    @chart = new Highcharts.Chart params


# Once DOM (document) is finished loading
$(document).ready ->
  # Charts definition
  window.charts = []

  window.influxdb = new InfluxDB
    host: 'esp8266.flymon.net'
    port: 8086
    username: 'webface'
    password: 'webface2015'
    database: 'esp8266'

  for name, graph_data of graphs
    # console.log "graph_data", graph_data
    chart = new Chart(name, graph_data)
    window.charts.push chart

