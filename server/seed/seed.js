import mongoose from "mongoose";
import dotenv from "dotenv";
import Flight from "../models/Flight.js";
import User from "../models/User.js";
import Booking from "../models/Booking.js";

import { sampleUsers, sampleFlights, sampleBookings } from "../seedData.js";

dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("✅ Connected to MongoDB");

    // Clear collections
    await Booking.deleteMany();
    await User.deleteMany();
    await Flight.deleteMany();

    // Insert users and flights
    const users = await User.insertMany(sampleUsers);
    const flights = await Flight.insertMany(sampleFlights);

    // Generate bookings
    const bookings = sampleBookings(users.map(u => u._id), flights.map(f => f._id));
    await Booking.insertMany(bookings);

    console.log("✅ Seed data inserted!");
    process.exit();
  })
  .catch((err) => {
    console.error("❌ Seeding failed:", err.message);
    process.exit(1);
  });
