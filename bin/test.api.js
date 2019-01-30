const axios = require('axios');

const getWeatherData = () => {
  axios.get('http://api.worldweatheronline.com/premium/v1/marine.ashx?key=xxx&format=json&q=36.0125,-5.6056&windspeedKmph')
    .then(response => {
      console.log(response.data.data.weather[0].hourly)
    })
    .catch(error => {
      console.log(error)
    })
}

getWeatherData();



