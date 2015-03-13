  graphs = {

    "defaults": {
      "chart": {
        "plotOptions": {
          "spline": {
            "marker": {
              "enabled": false
            }
          }
        }
      }
    },



    "temp": {
      chart: {
        title: 'Temperature',

        "plotOptions": {
          "spline": {
            "marker": {
              "enabled": true
            }
          }
        },

        yAxis: {
          title: {
             text: 'Humidity (%)'
          },
          min: 0,
          max: 99
        },

      },
      select: {
        fields: ["dhtt1", "bmpt"],
        mac: /18FE349E/
      }
    }
    ,

    "memory": {
      chart: {
        title: 'Memory'
      },
      select: {
        fields: ["freemem"]
      }
    }
  };
