const express = require("express");
const router = express.Router();
const { createBooking, getUserBookings, getAllBookings } = require("../controllers/bookingController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, createBooking); // ✅ Protected POST
router.get("/my", protect, getUserBookings);
router.get("/all", protect, getAllBookings); // ✅ Admin only

module.exports = router;
