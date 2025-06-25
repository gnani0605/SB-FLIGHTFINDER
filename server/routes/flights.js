const express = require('express');
const router = express.Router();
const { getAllFlights, addFlight } = require('../controllers/flightController');

router.get('/', getAllFlights);
router.post('/add', addFlight);

module.exports = router;
