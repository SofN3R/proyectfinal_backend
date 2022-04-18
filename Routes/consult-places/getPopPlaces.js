/*

Path: /api/consult

*/

const { getPopPlaces } = require("../../Controllers/consult-places/consultPopTrips");
const { Router } = require('express');

const router = Router();

router.get('/', getPopPlaces)

module.exports = router;




