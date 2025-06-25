// server/seed/seedBookings.js

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Booking = require("../models/Booking.js");
const Flight = require("../models/Flight.js");
const User = require("../models/User.js");

dotenv.config();

// Replace with your MongoDB URI
const mongoURI = process.env.MONGO_URI;

const seedBookings = async () => {
  try {
    await mongoose.connect(mongoURI);
    console.log("✅ MongoDB connected");

    const users = await User.find({});
    const flights = await Flight.find({});

    if (users.length === 0 || flights.length === 0) {
      console.log("❌ Please seed users and flights first.");
      process.exit();
    }

    // Remove existing bookings
    await Booking.deleteMany();

    const dummyBookings = [
      {
        user: users[0]._id,
        flight: flights[0]._id,
        passengerName: "Test User 1",
        email: "test1@example.com",
        seats: 2,
        totalAmount: flights[0].price * 2,
        status: "confirmed",
      },
      {
        user: users[0]._id,
        flight: flights[1]._id,
        passengerName: "Test User 2",
        email: "test2@example.com",
        seats: 1,
        totalAmount: flights[1].price,
        status: "confirmed",
      },
    ];

    await Booking.insertMany(dummyBookings);
    console.log("✅ Dummy bookings inserted!");
    process.exit();
  } catch (error) {
    console.error("❌ Error seeding bookings:", error);
    process.exit(1);
  }
};

seedBookings();
