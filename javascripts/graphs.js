
  defaults = {
      "chart": {
        chart: {
          type: 'spline'
        },
        "plotOptions": {
          "spline": {
            "marker": {
              "enabled": false
            }
          }
        },

        "tooltip": {
          "crosshairs": true
        }
      }
  }


  graphs = [


    {
      chart: {
        title: 'Counter',
        yAxis: {
          title: {
             text: 'ps'
          },
          min: 0
        },
        tooltip: {
          crosshairs: true,
          valueSuffix: ' ps'
        }
      },
      select: {
        fields: ["counter"]
      }
    },
    {
      chart: {
        title: 'Counter derivative',
        yAxis: {
          title: {
             text: 'ps'
          },
          min: 0
        },
        tooltip: {
          crosshairs: true,
          valueSuffix: ' ps'
        }
      },
      select: {
        fields: {counter: "DERIVATIVE(counter)"}
      }
    },


    {
      chart: {
        title: 'Counter diff',
        yAxis: {
          title: {
             text: 'ps'
          },
          min: 0
        },
        tooltip: {
          crosshairs: true,
          valueSuffix: ' ps'
        }
      },
      select: {
        fields: {counter: "DIFFERENCE(counter*-1)"}
      }
    },




  ];
