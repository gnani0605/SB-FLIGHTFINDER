const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking"); // Ensure this path is correct
const { createBooking, getUserBookings } = require("../controllers/bookingController");
const { protect } = require("../middleware/authMiddleware"); // ✅ Correct import

// ✅ Create Booking (old)
router.post("/create", protect, createBooking);

// ✅ Get User's Bookings
router.get("/my", protect, getUserBookings);

// ✅ Create Pending Booking (before payment)
router.post("/pending", protect, async (req, res) => {
  try {
    const {
      userId,
      flight,
      returnFlight,
      formData,
      travelClass,
      selectedSeats,
      returnSelectedSeats,
    } = req.body;

    const newBooking = new Booking({
      user: userId,
      flight,
      returnFlight,
      passengers: formData.passengers || [],
      travelClass,
      selectedSeats,
      returnSelectedSeats,
      email: formData.email,
      status: "Pending",
    });

    const savedBooking = await newBooking.save();
    res.status(200).json({ bookingId: savedBooking._id });
  } catch (err) {
    console.error("Error creating pending booking:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// ✅ Confirm Booking (after payment)
router.patch("/confirm/:id", protect, async (req, res) => {
  try {
    const updated = await Booking.findByIdAndUpdate(
      req.params.id,
      { status: "Confirmed" },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Booking not found" });
    }

    res.status(200).json({ message: "Booking confirmed", booking: updated });
  } catch (err) {
    console.error("Error confirming booking:", err);
    res.status(500).json({ message: "Internal server error" });
  }
});

// ✅ Get booked seats for a flight
router.get("/seats/:flightId", async (req, res) => {
  try {
    const bookings = await Booking.find({ flight: req.params.flightId });
    const bookedSeats = bookings.flatMap(b => b.selectedSeats || []);
    res.json({ bookedSeats });
  } catch (err) {
    res.status(500).json({ message: "Error fetching booked seats" });
  }
});

module.exports = router;
