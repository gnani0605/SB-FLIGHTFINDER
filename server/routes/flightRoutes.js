// routes/flightRoutes.js
const express = require('express');
const router = express.Router();
const { getAllFlights, getFlightById, searchFlights, } = require('../controllers/flightController');

// ✅ Fetch all flights
router.get('/', getAllFlights);
router.get("/search", searchFlights); 
// ✅ Fetch flight by ID
router.get('/:id', getFlightById);


module.exports = router;
