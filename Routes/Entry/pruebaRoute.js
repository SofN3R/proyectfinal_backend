const express = require('express');

const router = express.Router();

const privTripsControl = require('../../Controllers/Entry/prueba');

// router.get('/', privTripsControl.consultPrivTrips);

router.post('/', privTripsControl.newPrivTrip);

module.exports = router;
