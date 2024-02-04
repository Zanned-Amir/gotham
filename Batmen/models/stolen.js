const mongoose = require("mongoose");

const Stolen = mongoose.model("Stolen", {
  IMEI: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
  location: {
    latitude: String,
    longitude: String,
  },
  time_s: {
    type: Date,
    required: true,
  },
  time_d: {
    type: Date,
    required: true,
  },
});

module.exports = Stolen;
