const constants = require("../constants");
const mongoose = require("mongoose");

const beachSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "Name is required"
    },
    location: {
      type: { type: String },
      coordinates: [Number]
    },
    days: {
      day1: {
        hour00: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour03: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour06: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour09: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour12: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour15: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour18: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour21: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        }
      },
      day2: {
        hour00: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour03: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour06: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour09: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour12: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour15: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour18: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour21: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        }
      },
      day3: {
        hour00: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour03: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour06: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour09: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour12: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour15: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour18: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour21: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        }
      },
      day4: {
        hour00: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour03: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour06: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour09: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour12: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour15: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour18: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour21: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        }
      },
      day5: {
        hour00: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour03: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour06: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour09: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour12: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour15: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour18: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour21: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        }
      },
      day6: {
        hour00: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour03: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour06: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour09: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour12: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour15: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour18: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour21: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        }
      },
      day7: {
        hour00: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour03: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour06: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour09: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour12: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour15: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour18: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        },
        hour21: {
          tempC: {
            type: String
          },
          tempF: {
            type: String
          },
          windspeedMiles: {
            type: String
          },
          windspeedKmph: {
            type: String
          },
          winddir16Point: {
            type: String
          },
          weatherIconUrl: {
            type: String
          },
          weatherDesc: {
            type: String
          },
          significantHeight_m: {
            type: String
          },
          swellHeight_m: {
            type: String
          },
          swellHeight_ft: {
            type: String
          },
          swellDir16Point: {
            type: String
          },
          swellPeriod_secs: {
            type: String
          },
          waterTemp_C: {
            type: String
          },
          waterTemp_F: {
            type: String
          }
        }
      }
    }
  },
  { timestamps: true }
);

beachSchema.index({ location: "2dsphere" });

// userSchema.pre('save', function(next) {
//   if (this.email === FIRST_ADMIN_EMAIL) {
//     this.role = constants.ROLE_ADMIN;
//   } else {
//     next();
//   }
// });

const Beach = mongoose.model("Beach", beachSchema);
module.exports = Beach;
