require('../configs/db.config');

const Beach = require ('../models/beach.model'); 

const playas = [
  {
    name: "Valdevaqueros",
    location: {
      type:'Point',
      coordinates: [36.0125, -5.6056]
    },
    sports: ["Kitesurf", "Surf"]
  },
  {
    name: "El Postiguet",
    location: {
      type:'Point',
      coordinates: [43.4506, -3.7358]
    },
    sports: ["Kitesurf", "Surf"]
  },
  {
    name: "El Palmar",
    location: {
      type:'Point',
      coordinates: [55.8167, -3]
    },
    sports: ["Windsurf", "Surf"]
  },
  {
    name: "Altea",
    location: {
      type:'Point',
      coordinates: [23.067779, -3.685508]
    },
    sports: ["Kitesurf", "Surf"]
  },
];

Beach.create(playas)
  .then(console.info)
  .catch(console.error);
