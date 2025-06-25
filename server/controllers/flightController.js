// controllers/flightController.js
const Flight = require('../models/Flight');

// ✅ Get all flights
const getAllFlights = async (req, res) => {
  try {
    const flights = await Flight.find();
    res.json(flights);
  } catch (error) {
    console.error("Error fetching all flights:", error.message);
    res.status(500).json({ message: 'Server error' });
  }
};

// ✅ Get flight by ID
const getFlightById = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    if (!flight) {
      return res.status(404).json({ message: 'Flight not found' });
    }
    res.json(flight);
  } catch (error) {
    console.error("Flight fetch error:", error.message);
    res.status(500).json({ message: 'Server error' });
  }
};
const searchFlights = async (req, res) => {
  try {
    const { from, to, startDate, endDate } = req.query;
    const query = { from, to };

    if (startDate) query.date = { $gte: startDate };
    if (endDate) query.date = { ...query.date, $lte: endDate };

    const flights = await Flight.find(query);
    res.json(flights);
  } catch (err) {
    console.error("Search Error:", err);
    res.status(500).json({ message: "Failed to search flights." });
  }
};
module.exports = { getAllFlights, getFlightById,searchFlights };
