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
        chart: {
          type: 'column'
        },
        title: 'Uptime',
        type: 'column',
        yAxis: {
          title: {
            text: 'sec'
          },
          min: 0
        },
        tooltip: {
          crosshairs: true,
          valueSuffix: ' sec'
        },
        plotOptions: {
          spline: {
            marker: {
              symbol: 'diamond',
              enabled: 'true'
            }
          }
        }
      },
      select: {
        fields: ["uptime"]
      }
    },

    {
      chart: {
        title: 'Temperature',
        yAxis: {
          title: {
            text: '°C'
          }
        },
        tooltip: {
          crosshairs: true,
          valueSuffix: ' °C'
        }
      },
      select: {
        fields: ["amt", "bmpt", "dhtt1", "dhtt2", "ds", "dsw1", "dsw2", "dsw3", "dsw4", "dsw5", "dsw6", "dsw7", "dsw8", "dsw9", "dsw10"],
      }
    },

    {
      chart: {
        title: 'Free Memory',
        yAxis: {
          title: {
            text: 'bytes'
          }
        },
        tooltip: {
          crosshairs: true,
          valueSuffix: ' bytes'
        }
      },
      select: {
        fields: ["freemem"]
      }
    },


    {
      chart: {
        title: 'Atmospheric pressure',
        yAxis: {
          title: {
             text: 'mmHg'
          }
        },
        tooltip: {
          crosshairs: true,
          valueSuffix: ' mmHg'
        }
      },
      select: {
        fields: ["bmpp"]
      }
    },

    {
      chart: {
        title: 'Power Voltage',
        yAxis: {
          title: {
             text: 'mV'
          }
        },
        tooltip: {
          crosshairs: true,
          valueSuffix: ' mV'
        }
      },
      select: {
        fields: ["vdd"]
      }
    },


    {
      chart: {
        title: 'Analog-to-digital converter',
        yAxis: {
          title: {
             text: 'points'
          },
          min: 1,
          max: 256
        },
        tooltip: {
          crosshairs: true,
          valueSuffix: ' points'
        }
      },
      select: {
        fields: ["adc0", "adc1", "adc2", "adc3"]
      }
    },





    {
      chart: {
        title: 'Humidity',
        yAxis: {
          title: {
             text: '%'
          },
          min: 0,
          plotLines: [{
            value: 20,
            color: 'green',
            dashStyle: 'shortdash',
            width: 1,
            label: {
              text: 'Critical low'
            }
          }, {
            value: 90,
            color: 'red',
            dashStyle: 'shortdash',
            width: 1,
            label: {
              text: 'Critical high'
            }
          }],
        },
        tooltip: {
          crosshairs: true,
          valueSuffix: ' %'
        }
      },
      select: {
        fields: ["amh", "dhth1", "dhth2"]
      }
    },





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
        title: 'GPIO Input Monitor',

        yAxis: {
          title: {
             text: 'status'
          },
          min: 0,
          max: 1
        },
        tooltip: {
          crosshairs: true,
          valueSuffix: ' status'
        }
      },
      select: {
        fields: ["gpio1", "gpio2", "gpio3", "gpio4", "gpio5"]
      }
    },




    {
      chart: {
        title: 'Brightness',
        yAxis: {
          title: {
             text: 'Lux'
          },
          min: 0
        },
        tooltip: {
          crosshairs: true,
          valueSuffix: ' Lux'
        }
      },
      select: {
        fields: ["light"]
      }
    }


];
