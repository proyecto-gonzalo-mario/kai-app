const createError = require("http-errors");
const mongoose = require("mongoose");
const User = require("../models/user.model");
const Beach = require("../models/beach.model");


module.exports.drawHome = (req, res, next) => {
  res.render('home/main', {layout: false});
};
