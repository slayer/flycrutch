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

  mac: =>
    if @data.select.mac?
      @data.select.mac
    else
      /^18FE.*/

  query: =>
    fields = @fields().join(', ')
    "SELECT host, #{fields} FROM srach GROUP BY time(5m) WHERE mac =~ #{@mac()} AND time > NOW() - 3h;"

  loadData: (cb) =>
    influxdb.query @query(), (points) =>
      nodes = _.groupBy points, (point) -> point.host
      series = {}

      _.each nodes, (points, host) =>
        # console.log "#{host} points: ", points
        _.each @fields(), (field) =>
          name = "#{host} - #{field}"
          series[name] ||= {name: name, data: []}

      _.each nodes, (points, host) =>
        data = _.each points, (point) =>
          _.each @fields(), (field) =>
            name = "#{point.host} - #{field}"
            series[name].data.push [point.time.getTime(), point[field]]

      # Fill @series if data present
      for name, serie of series
        if _.find(serie.data, (item) -> !!item[1])
          serie.data = serie.data.reverse()
          @series.push serie

      # console.log "series: ", series

      cb() if cb?


  show: =>
    div = $('<div>').addClass("chart")
    $("#content").append div

    params = _.clone(@data.chart)
    _.merge params,
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

    console.log "params: ", params
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

  Highcharts.setOptions global: useUTC: false

  defaults = graphs.defaults
  delete graphs.defaults
  for name, graph_data of graphs
    # console.log "graph_data", graph_data
    data = _.cloneDeep(defaults)
    _.merge data, graph_data
    console.log "graph_data", data
    chart = new Chart(name, data)
    window.charts.push chart

