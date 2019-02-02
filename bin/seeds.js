require('../configs/db.config');

const Beach = require ('../models/beach.model'); 

const playas = [
  {
    name: "Valdevaqueros",
    location: {
      coordinates: [-5.685508, 36.067779]
    },
    sports: ["Kitesurf", "Surf"]
  },
  {
    name: "El Postiguet",
    location: {
      coordinates: [-5.685508, 36.067779]
    },
    sports: ["Kitesurf", "Surf"]
  },
  {
    name: "El Palmar",
    location: {
      coordinates: [-5.685508, 36.067779]
    },
    sports: ["Windsurf", "Surf"]
  },
  {
    name: "Altea",
    location: {
      coordinates: [-5.685508, 36.067779]
    },
    sports: ["Kitesurf", "Surf"]
  },
];

Beach.create(playas)
  .then(console.info)
  .catch(console.error);
