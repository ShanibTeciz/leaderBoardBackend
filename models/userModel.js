const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  participantName: {
    type: String,
    required: [true, "Participant Name is required"],
  },
  location: {
    type: String,
    required: [true, "Please enter Location"],
  },
  date: {
    type: Date,
    required: [true, "Please enter Date"],
  },
  units:{
      type:String,
      required: [true,"unit is required"]
  },
  type: {
    type: String,
    required: [true, "Please enter type"],
  },
  points: {
    type: Number,
    required: [true, "Please enter point"],
  },
 
});



const User = new mongoose.model("User", userSchema);

module.exports = User;
