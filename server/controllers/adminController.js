const User = require("../models/User");
const Flight = require("../models/Flight");
const Booking = require("../models/Booking");

const getAdminStats = async (req, res) => {
  const usersCount = await User.countDocuments();
  const flightsCount = await Flight.countDocuments();
  const bookingsCount = await Booking.countDocuments();
  const revenue = await Booking.aggregate([
    { $group: { _id: null, total: { $sum: "$price" } } },
  ]);
  const totalRevenue = revenue[0]?.total || 0;

  res.json({ usersCount, flightsCount, bookingsCount, totalRevenue });
};
const getAllBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({})
      .populate("user", "name email")
      .populate("flight", "airline from to");
    res.json(bookings);
  } catch (error) {
    console.error("Error fetching bookings:", error);
    res.status(500).json({ message: "Error fetching bookings" });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Error fetching users" });
  }
};
const deleteBooking = async (req, res) => {
  try {
    await Booking.findByIdAndDelete(req.params.id);
    res.json({ message: "Booking cancelled" });
  } catch (err) {
    res.status(500).json({ message: "Error cancelling booking" });
  }
};
const addFlight = async (req, res) => {
  try {
    const {
      airline,
      from,
      to,
      departureTime,
      arrivalTime,
      date,
      price,
    } = req.body;

    const flight = new Flight({
      airline,
      from,
      to,
      departureTime,
      arrivalTime,
      date,
      price,
    });

    await flight.save();
    res.status(201).json({ message: "Flight added successfully", flight });
  } catch (err) {
    res.status(500).json({ message: "Failed to add flight", error: err.message });
  }
};
const deleteFlight = async (req, res) => {
  try {
    await Flight.findByIdAndDelete(req.params.id);
    res.json({ message: "Flight deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete flight", error: err.message });
  }
};
module.exports = { getAllBookings, getAllUsers,getAdminStats,deleteBooking,deleteFlight,addFlight };

