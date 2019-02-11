const MARINE_API_KEY = process.env.MARINE_API_KEY;
const axios = require("axios");
const API_PATH = 'http://api.worldweatheronline.com/premium/v1';


module.exports.check = (place) => {
  const location = `${place.location.coordinates[1]},${place.location.coordinates[0]}`;
  return axios.get(`${API_PATH}/marine.ashx`, {
    params: {
      key: MARINE_API_KEY,
      format: 'json',
      q: location,
      tp: '24'
    }
  }).then(res => {
    const weathers = res.data.data.weather;
    const days = [];
    for (let i = 0; i < weathers.length; i ++) {
      days.push({
        name: place.name,
        date: weathers[i].date,
        windSpeed: weathers[i].hourly[0].windspeedKmph,
        swellHeight: weathers[i].hourly[0].swellHeight_m,
      })
    }

    const info = {
      name: place.name,
      days: days
    }

    return Promise.resolve(info);
  })
}