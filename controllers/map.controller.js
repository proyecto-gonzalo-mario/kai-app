const createError = require("http-errors");
const mongoose = require("mongoose");
const User = require("../models/user.model");

module.exports.verify = (req, res, next) => {
  User.findByIdAndUpdate(
    req.params.id,
    { $set: { verified: true } },
    { new: true }
  );

  res.redirect("/sessions/create");
};

module.exports.showMap = (req, res, next) => {
  User.find()
    .then(users => {
      res.render("map/drawmap", {
        users: users
      });
    })
    .catch(error => next(error));
};


//{ $set: { name: 'hello' } }, 
// { $set: { email: req.body.email } },
// { $set: { windSpeedMax: req.body.windSpeedMax } },
// { $set: { swellHeightMax: req.body.swellHeightMax } },
// { $set: { sports: req.body.swellHeightMax } }