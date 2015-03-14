  graphs = {

    "defaults": {
      "chart": {
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
    },



    "uptime": {
      chart: {
        title: 'Uptime',

        "plotOptions": {
          "spline": {
            "marker": {
              "enabled": true
            }
          }
        },

        yAxis: {
          title: {
             text: 'Uptime (sec)'
          }
        }
      },

      select: {
        fields: ["uptime"]
      }
    },


    "temp": {
      chart: {
        title: 'Temperature',

        yAxis: {
          title: {
            text: 'Temperature (C)'
          },
          min: -10,
          max: 50
        },

     tooltip: {
        crosshairs: true,
//        shared: true,
        valueSuffix: ' CCCC'
     },

      },
      select: {
        fields: ["amt", "bmpt", "dhtt1", "dsw1", "dsw2"],
        mac: /18FE349E/
      }
    },



    "memory": {
      chart: {
        title: 'Free Memory in ESP8266',

        tooltip: {
          valueSuffix: ' bytes'
        },

      },
      select: {
        fields: ["freemem"]
      }
    },



    "pressure": {
      chart: {
        title: 'Atmospheric pressure',
        tooltip: {
          valueSuffix: ' mmHg'
        },
        yAxis: {
          title: {
             text: ' mmHg'
          }
        }
      },
      select: {
        fields: ["bmpp"]
      }
    }




  };
