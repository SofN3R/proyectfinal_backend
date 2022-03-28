
/*

   Path: /api/public

*/

const express = require('express');

const router = express.Router();

const publicTrip = require('../../Controllers/Entry/publicTripController');




router.put('/:id', publicTrip.postTrip);


module.exports = router;
