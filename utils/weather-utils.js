const axios = require('axios');

module.exports.getWeatherData = () => {
  axios.get('http://api.worldweatheronline.com/premium/v1/marine.ashx?key=c6d321e6a7e7469d92a173556193001&format=json&q=48.834,2.394&windspeedKmph&tp=24')
  .then(response => {
    const todayAverageWindSpeed = response.data.data.weather[0].hourly[0].windspeedKmph;
    const todayAverageSpeedDirection = response.data.data.weather[0].hourly[0].winddir16Point;


    const weatherForToday = {
      windSpeed: todayAverageWindSpeed,
      speedDirection: todayAverageSpeedDirection
    }

    console.log(weatherForToday);
  })
  .catch(error => console.log(error))
}