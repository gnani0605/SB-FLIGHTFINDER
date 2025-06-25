const Flight = require("../models/Flight");

exports.getAllFlights = async (req, res) => {
  const flights = await Flight.find();
  res.json(flights);
};

exports.addFlight = async (req, res) => {
  try {
    const flight = await Flight.create(req.body);
    res.status(201).json(flight);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteFlight = async (req, res) => {
  try {
    await Flight.findByIdAndDelete(req.params.id);
    res.json({ message: "Flight deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
