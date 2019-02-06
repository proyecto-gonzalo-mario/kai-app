const mongoose = require("mongoose");

const beachSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: "Name is required"
    },
    location: {
      type: { type: String },
      coordinates: [Number]
    },
 sports: {
      type: [String]
    }
    // weatherForecast: [{
    //   day: {
    //     hour: {
    //       tempC: {
    //         type: String
    //       },
    //       tempF: {
    //         type: String
    //       },
    //       windspeedMiles: {
    //         type: String
    //       },
    //       windspeedKmph: {
    //         type: String
    //       },
    //       winddir16Point: {
    //         type: String
    //       },
    //       weatherIconUrl: {
    //         type: String
    //       },
    //       weatherDesc: {
    //         type: String
    //       },
    //       significantHeight_m: {
    //         type: String
    //       },
    //       swellHeight_m: {
    //         type: String
    //       },
    //       swellHeight_ft: {
    //         type: String
    //       },
    //       swellDir16Point: {
    //         type: String
    //       },
    //       swellPeriod_secs: {
    //         type: String
    //       },
    //       waterTemp_C: {
    //         type: String
    //       },
    //       waterTemp_F: {
    //         type: String
    //       }
    //     }}}],
  },{ timestamps: true }
  );

beachSchema.index({ location: "2dsphere" });

// userSchema.pre('save', function(next) {
//   if (this.email === FIRST_ADMIN_EMAIL) {
//     this.role = constants.ROLE_ADMIN;
//   } else {
//     next();
//   }
// });

const Beach = mongoose.model("Beach", beachSchema);
module.exports = Beach;



