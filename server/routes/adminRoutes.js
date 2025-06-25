const express = require("express");
const router = express.Router();
const {
  getAllBookings,
  getAdminStats,
  getAllUsers,
  deleteBooking,
  addFlight, 
  deleteFlight
} = require("../controllers/adminController");
const { protect, isAdmin } = require("../middleware/authMiddleware");

router.get("/stats", protect, isAdmin, getAdminStats);
router.get("/bookings", protect, isAdmin, getAllBookings); // ✅ THIS LINE
router.get("/users", protect, isAdmin, getAllUsers);
router.delete("/bookings/:id", protect, isAdmin, deleteBooking);
router.post("/flights", protect, isAdmin, addFlight);

// Delete a flight
router.delete("/flights/:id", protect, isAdmin, deleteFlight);

module.exports = router;
