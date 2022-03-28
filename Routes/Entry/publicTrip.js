
/*

   Path: /api/public

*/

const express = require('express');

const router = express.Router();

const {getAllPublic, postTrip} = require('../../Controllers/Entry/publicTripController');


router.get('/', getAllPublic);

router.put('/:id', postTrip);


module.exports = router;
