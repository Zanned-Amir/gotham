const mongoose = require("mongoose");

const Declare = mongoose.model("Declare", {
 
    fullName: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: String,
        required: true,
      },email: {
        type: String,
        required: true,
      },
      textDeclaration : {
        type: String,
        required: true,
      }
  
});

module.exports = Declare;
