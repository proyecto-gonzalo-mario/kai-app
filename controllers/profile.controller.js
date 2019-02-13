const createError = require("http-errors");
const mongoose = require("mongoose");
const User = require("../models/user.model");
const crypto = require("crypto");
const token = crypto.randomBytes(64).toString("hex");
const transporter = require("../configs/nodemailer.config");
const passport = require("passport")

module.exports.verify = (req, res, next) => {
  User.findByIdAndUpdate(
    req.params.id,
    { $set: { verified: true } },
    { new: true }
  );

  res.redirect("sessions/create");
};

module.exports.edit = (req, res, next) => {
  res.render('profile/edit1');
};

module.exports.doEdit = (req, res, next) => {
  User.findByIdAndUpdate(req.user.id, { $set: req.body })
    .then(user => {
      if (!user) {
        next(createError(404, "User not found"));
      } else {
        res.redirect("/map");
      }
    })
    .catch(error => next(error));

};

module.exports.doDelete = (req, res, next) => {
  User.findByIdAndRemove(req.params.id)
    .then(user => {
      if (!user) {
        next(createError(404, "User not found"));
      } else {
        res.redirect("/profile");
      }
    })
    .catch(error => next(error));
};

//{ $set: { name: 'hello' } },
// { $set: { email: req.body.email } },
// { $set: { windSpeedMax: req.body.windSpeedMax } },
// { $set: { swellHeightMax: req.body.swellHeightMax } },
// { $set: { sports: req.body.swellHeightMax } }
