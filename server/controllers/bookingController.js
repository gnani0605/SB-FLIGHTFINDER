const Booking = require("../models/Booking");

exports.createBooking = async (req, res) => {
  try {
const {
      flight,
      passengers,
      travelClass,
      formData,
      selectedSeats,
      isRoundTrip,
      returnFlight,
    } = req.body;
    if (!flight || !passengers || passengers.length === 0) {
      return res.status(400).json({ message: "Missing booking details" });
    }

      const booking = await Booking.create({
      user: req.user.userId,
      flight,
      passengers,
      travelClass,
      selectedSeats,
      email: formData?.email || "", // optional: you can store email separately if needed
    });

    res.status(201).json(booking);
  } catch (error) {
    console.error("Booking creation error:", error);
    res.status(500).json({ message: "Server error while creating booking" });
  }
};

exports.getUserBookings = async (req, res) => {
  const bookings = await Booking.find({ user: req.user.userId }).populate("flight");
  res.json(bookings);
};

exports.getAllBookings = async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).json({ error: "Access denied" });
  const bookings = await Booking.find().populate("flight user");
  res.json(bookings);
};
// controllers/bookingController.js

exports.bookFlight = async (req, res) => {
  try {
    const { flight, passengers, travelClass, returnFlight, isRoundTrip } = req.body;

    const bookings = [];

    // Book outbound flight
    const outboundBooking = await Booking.create({
       user: req.user.userId,
      flight,
      passengers,
      travelClass,
      formData,
      selectedSeats,
      status: "confirmed",
    });

    bookings.push(outboundBooking);

    // Book return flight if round-trip
    if (isRoundTrip && returnFlight) {
      const returnBooking = await Booking.create({
         user: req.user.userId,
        flight: returnFlight,
        passengers,
        travelClass,
        formData,
        selectedSeats,
        status: "confirmed",
      });

      bookings.push(returnBooking);
    }

    res.status(201).json({ message: "Booking successful", bookings });
  } catch (err) {
    res.status(500).json({ message: err.message || "Booking failed" });
  }
};
