const express = require('express');

const router = express.Router();

const privTripsControl = require('../../Controllers/Entry/privTripsController');
const { validateJWT } = require('../../middlewares/validateJWT');


router.get('/:id', validateJWT,privTripsControl.consultPrivTrips);


router.post('/:id', validateJWT,privTripsControl.newPrivTrip);

router.put('/:idus/:idtrip', validateJWT, privTripsControl.updatePrivTrips);

module.exports = router;
