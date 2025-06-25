const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  from: String,
  to: String,
  date: String,
  time: String,
  price: Number,
  airline: String,
  departureTime:String,
  arrivalTime:String,
});

module.exports = mongoose.model("Flight", flightSchema);
