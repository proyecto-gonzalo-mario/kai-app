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
  if (req.user.name) {
    next()
  } else {
    res.redirect('/users/edit');
  }
}