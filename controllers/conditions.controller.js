const createError = require("http-errors");
const mongoose = require("mongoose");
const User = require("../models/user.model");
const Beach = require("../models/beach.model");
const axios = require("axios");

const MARINE_API_KEY = process.env.MARINE_API_KEY;

module.exports.checkConditions = (req, res, next) => {
  const beachesData = [];

  Beach.find()
    .then(beaches => {
      beaches.forEach(function(beach) {
        const lat = beach.location.coordinates[1];
        const long = beach.location.coordinates[0];
        const latLong = lat + "," + long;
        axios.get(`http://api.worldweatheronline.com/premium/v1/marine.ashx?key=${MARINE_API_KEY}&format=json&q=${latLong}&tp=24`)
          .then(response => {
            const firstDay = {
              windSpeed: response.data.data.weather[0].hourly[0].windspeedKmph,
              swellHeight: response.data.data.weather[0].hourly[0].swellHeight_m
            }
            const secondDay = {
              windSpeed: response.data.data.weather[1].hourly[0].windspeedKmph,
              swellHeight: response.data.data.weather[1].hourly[0].swellHeight_m
            }
            const thirdDay = {
              windSpeed: response.data.data.weather[2].hourly[0].windspeedKmph,
              swellHeight: response.data.data.weather[2].hourly[0].swellHeight_m
            }
            const fourthDay = {
              windSpeed: response.data.data.weather[3].hourly[0].windspeedKmph,
              swellHeight: response.data.data.weather[3].hourly[0].swellHeight_m
            }
            const fifthDay = {
              windSpeed: response.data.data.weather[4].hourly[0].windspeedKmph,
              swellHeight: response.data.data.weather[4].hourly[0].swellHeight_m
            }
            const sixthDay = {
              windSpeed: response.data.data.weather[5].hourly[0].windspeedKmph,
              swellHeight: response.data.data.weather[5].hourly[0].swellHeight_m
            }
            const seventhDay = {
              windSpeed: response.data.data.weather[6].hourly[0].windspeedKmph,
              swellHeight: response.data.data.weather[6].hourly[0].swellHeight_m
            }

            const beachWeekWeatherForecast = {
              day1: firstDay,
              day2: secondDay,
              day3: thirdDay,
              day4: fourthDay,
              day5: fifthDay,
              day6: sixthDay,
              day7: seventhDay
            }

            beachesData.push(beachWeekWeatherForecast);
            console.log(beachesData)
            // const todayAverageWindSpeed =
            //   response.data.data.weather[0].hourly[0].windspeedKmph;
            // const todayAverageSpeedDirection =
            //   response.data.data.weather[0].hourly[0].winddir16Point;

            // const weatherForToday = {
            //   latlong: latlong,
            //   windSpeed: todayAverageWindSpeed,
            //   speedDirection: todayAverageSpeedDirection
            // };
          })
          .catch(error => console.log(error));
      });
    })
    .catch(error => next(error));
};
