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
        const latlong = lat + "," + long;
        axios
          .get(
            `http://api.worldweatheronline.com/premium/v1/marine.ashx?key=${MARINE_API_KEY}&format=json&q=${latlong}&windspeedKmph&tp=24`
          )
          .then(response => {
            const todayAverageWindSpeed =
              response.data.data.weather[0].hourly[0].windspeedKmph;
            const todayAverageSpeedDirection =
              response.data.data.weather[0].hourly[0].winddir16Point;

            const weatherForToday = {
              latlong: latlong,
              windSpeed: todayAverageWindSpeed,
              speedDirection: todayAverageSpeedDirection
            };

            console.log(weatherForToday);
          })
          .catch(error => console.log(error));
      });
    })
    .catch(error => next(error));
};
