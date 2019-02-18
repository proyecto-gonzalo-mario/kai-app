require('../configs/db.config');

const Beach = require ('../models/beach.model'); 

const playas = [
  {
    name: "Delta del Ebro",
    location: {
      type:'Point',
      coordinates: [41.12, 0.9367]
    },
    sports: ["Kitesurf", "Windsurf"]
  },
  {
    name: "La Manga del Mar Menor",
    location: {
      type:'Point',
      coordinates: [37.6458, -0.7917]
    },
    sports: ["Kitesurf", "Windsurf"]
  },
  {
    name: "Roquetas de Mar",
    location: {
      type:'Point',
      coordinates: [36.7469, -2.6188]
    },
    sports: ["Kitesurf", "Windsurf"]
  },
  {
    name: "Tarifa",
    location: {
      type:'Point',
      coordinates: [36.0125, -5.6056]
    },
    sports: ["Kitesurf", "Windsurf", "Surf"]
  },
  {
    name: "Somo",
    location: {
      type:'Point',
      coordinates: [43.4506, -3.7358]
    },
    sports: ["Surf"]
  },
  {
    name: "Lanzarote",
    location: {
      type:'Point',
      coordinates: [28.05, -15.5833]
    },
    sports: ["Surf"]
  },
  {
    name: "Nazare",
    location: {
      type:'Point',
      coordinates: [39.8083, -8.7833]
    },
    sports: ["Surf"]
  },
  {
    name: "Ericeira",
    location: {
      type:'Point',
      coordinates: [39.0367, -9.2515]
    },
    sports: ["Surf"]
  },
  
];

Beach.create(playas)
  .then(console.info)
  .catch(console.error);
