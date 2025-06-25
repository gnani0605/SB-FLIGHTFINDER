const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  flight: {
    type: mongoose.Schema.Types.Mixed, // can store the full object or just ID
    required: true,
  },
  returnFlight: {
    type: mongoose.Schema.Types.Mixed, // optional for round trip
    default: null,
  },
  passengers: [
    {
      name: String,
      age: Number,
      gender: String,
    },
  ],
  travelClass: {
    type: String,
    enum: ["Economy", "Business", "First Class"],
    default: "Economy",
  },
  selectedSeats: [String],          // Departure seats
  returnSelectedSeats: [String],    // Return flight seats
  email: String,

  status: {
    type: String,
    enum: ["Pending", "Confirmed"],
    default: "Pending",
  },
}, { timestamps: true });

module.exports = mongoose.model("Booking", bookingSchema);
