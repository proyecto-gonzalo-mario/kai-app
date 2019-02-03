
const constants = require('../constants');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 10;
const FIRST_ADMIN_EMAIL = process.env.FIRST_ADMIN_EMAIL;

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name is required'
  },
  email: {
    type: String,
    required: 'Email is required',
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
    unique: true
  },
  password: {
    type: String,
    required: 'Password is required',
  },
  social: {
    googleId: String,
    facebookId: String
  },
  verified: {
    type: Boolean,
    default: false
  },
  token: {
    type: String
  },
  role: {
    type: String,
    enum: [constants.ROLE_ADMIN, constants.ROLE_ADMIN],
    default: constants.ROLE_ADMIN
  },
  // location: {
  //   type: { type: String },
  //   coordinates: [Number]
  // },
  sports: {
    type: [String],
    required: true
  },
  weight: {
    type: Number
  },
  height: {
    type: Number
  },
  windSpeedMin: {
    type: Number
  },
  windSpeedMax: {
    type: Number
  },
  swellHeightMin: {
    type: Number
  },
  swellHeightMax: {
    type: Number
  },
  
}, { timestamps: true });

userSchema.index({ location: '2dsphere' });

userSchema.pre('save', function(next) {
  if (this.email === FIRST_ADMIN_EMAIL) {
    this.role = constants.ROLE_ADMIN;
  }

  if (this.isModified('password')) {
    bcrypt.genSalt(SALT_WORK_FACTOR)
      .then(salt => {
        return bcrypt.hash(this.password, salt)
      })
      .then(hash => {
        this.password = hash;
        next();
      })
      .catch(error => next(error));
  } else {
    next();
  }
});

userSchema.methods.checkPassword = function(password) {
  return bcrypt.compare(password, this.password);
}

const User = mongoose.model('User', userSchema);
module.exports = User;
