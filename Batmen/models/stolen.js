const mongoose = require("mongoose");

const Stolen = mongoose.model("Stolen", {
  
  location: {
    latitude: String,
    longitude: String,
  },
});

module.exports = Stolen;
