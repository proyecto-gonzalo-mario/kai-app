const createError = require("http-errors");
const mongoose = require("mongoose");
const User = require("../models/user.model");
const Beach = require("../models/beach.model");
const axios = require("axios");
const placesConditions =  require('../services/places-conditions.service');
const transporter = require('../configs/nodemailer.config')

module.exports.checkConditions = (req, res, next) => {
  Promise.all([
      User.find(),
      Beach.find()
    ])
    .then(([users, beaches]) => {
      const beachesConditions = [];
      beaches.forEach((beach) => {
        beachesConditions.push(placesConditions.check(beach));
      });
      return Promise.all(beachesConditions)
        .then(conditions  => {
          users.forEach((user) => {
            const places = user.placesMatch(conditions).map(place => place.name);
            if (places.length > 0) {
              // TODO: send mail to user
              transporter.sendMail({
                from: 'Kai <testironhack@gmail.com>',
                to: `${user.email}`,
                subject: 'Something cool is coming in your favorite spot',
                text: `${places}`
              })
                
            
            } else {
              console.log('Not good bro');
              console.log(places)
            }
          });
        })
    })
    .catch(error => next(error));
};
