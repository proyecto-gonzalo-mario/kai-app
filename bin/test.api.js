const axios = require('axios');
const MARINE_API_KEY = process.env.MARINE_API_KEY;

axios.get(`http://api.worldweatheronline.com/premium/v1/marine.ashx?key=${MARINE_API_KEY}&format=json&q=36.0125,-5.6056&windspeedKmph&tp=24`)
  .then(response => {
    debugger;
  })
  .catch(console.error);


  /*
  
    iterate over saved beaches
      for each beach:
        ask API for this latitude longitude
          iterate over days
            check if any user matches day conditions:
              create event (relation between date and user)
              notify user (email)
    
    Event model
      beach: id of beach
      date: date of the event
      users: array of user ids
  */



