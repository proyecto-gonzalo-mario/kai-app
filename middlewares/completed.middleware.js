const createError = require('http-errors');


// module.exports.checkCompleteness = (name) => {
//   return (req, res, next) => {
//     if (req.user.name !== "") {
//       next();
//     } else {
//       next(createError(403, 'Insufficient privileges'))
//     }
//   }
// }

module.exports.checkCompleteness = (req, res, next) => {
  if (req.user.name && req.user.email && req.user.sports && req.user.windSpeedMax && req.user.windSpeedMin && req.user.swellHeightMax && req.user.swellHeightMin) {
    next()
  } else {
    res.redirect('/profile/edit');
  }
}