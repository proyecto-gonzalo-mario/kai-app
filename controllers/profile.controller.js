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

  res.redirect("/sessions/create");
};

module.exports.showRiderSettings = (req, res, next) => {
  
  function renderWithErrors(errors) {
    res.status(400).render('profile/ridersettings', {
      user: req.body,
      errors: errors
    });
  }

  let { email, name } = req.body;

  if (!email || !name) {
    renderWithErrors({
      email: email ? undefined : 'Email is required',
      name: name ? undefined : "Name is required"
    });
  } else {
   console.log("hola")
  }
};

module.exports.create = (req, res, next) => {
  res.render("profile/create");
};

module.exports.doCreate = (req, res, next) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        res.render("profile/create", {
          user: req.body,
          errors: { email: "Email already registered" }
        });
      } else {
        user = new User({
          email: req.body.email,
          name: req.body.name,
          password: req.body.password,
          token: token,
          verified: false,
          location: {
            type: "Point",
            coordinates: [req.body.longitude, req.body.latitude]
          }
        });
        return user.save().then(user => {
          transporter
            .sendMail({
              from: '"My Awesome Project 👻" <testironhack@gmail.com>',
              to: `${user.email}`,
              subject: "Email verification",
              text: `http://localhost:3000/profile/verify/${user.token}`
            })
            .then(info => console.log(info))
            .catch(error => console.log(error));

          res.redirect("/sessions/create");
        });
      }
    })
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.render("profile/create", {
          user: req.body,
          errors: error.errors
        });
      } else {
        next(error);
      }
    });
};

module.exports.doEdit = (req, res, next) => {
  User.findByIdAndUpdate(req.user._id, { $set: req.body })
    .then(user => {
      if (!user) {
        next(createError(404, "User not found"));
      } else {
        res.redirect("/profile/ridersettings");
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
