const express = require('express');

const router = express.Router();

const privTripsControl = require('../../Controllers/Entry/privTripsController');

router.get('/', privTripsControl.consultPrivTrips);

router.post('/', privTripsControl.newPrivTrip);

router.put('/:id',  privTripsControl.updatePrivTrips);

module.exports = router;
