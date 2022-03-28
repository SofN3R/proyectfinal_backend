const express = require('express');

const router = express.Router();

const privTripsControl = require('../../Controllers/Entry/privTripsController');
const { validateJWT } = require('../../middlewares/validateJWT');


router.get('/', privTripsControl.consultPrivTrips);



router.get('/:id', validateJWT , privTripsControl.getTripById);

router.post('/', privTripsControl.newPrivTrip);

router.put('/:id', validateJWT ,privTripsControl.updatePrivTrips);

module.exports = router;
