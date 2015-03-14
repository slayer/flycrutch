  graphs = {

    "defaults": {
      "chart": {
        chart: {
          type: 'column'
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
    },



    "example": {
      chart: {
        title: 'Example graph',
        type: 'column',
        width: '100',

        yAxis: {
          title: {
            text: 'Essence'
          },
          min: -10,
          max: 50
        },

        tooltip: {
          crosshairs: true,
          valueSuffix: ' EX'
        },

        plotOptions: {
          series: {
            marker: {
              symbol: 'diamond',
              enabled: 'true'
            }
          }
        }

      },
      select: {
        fields: ["field1", "field2"],
        mac: /18FE349B/
      }
    },










    "uptime": {
      chart: {
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





    "temp": {
      chart: {
        title: 'Temperature',
        yAxis: {
          title: {
            text: 'C'
          }
        },
        tooltip: {
          crosshairs: true,
          valueSuffix: ' C'
        }
      },
      select: {
        fields: ["amt", "bmpt", "dhtt1", "dhtt2", "ds", "dsw1", "dsw2", "dsw3", "dsw4", "dsw5", "dsw6", "dsw7", "dsw8", "dsw9", "dsw10"],
      }
    },





    "memory": {
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





    "pressure": {
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





    "power": {
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





    "adc": {
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





    "humidity": {
      chart: {
        title: 'Humidity',
        yAxis: {
          title: {
             text: '%'
          },
          min: 0
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





    "counter": {
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





    "gpio": {
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




    "light": {
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
    },





  };
