/*

Path: /api/consult/:buscar

*/

const { Router } = require('express');
const { validateJWT } = require('../../middlewares/validateJWT');

const router = Router();

const { getPlaces } = require('../../Controllers/consult-places/conPlacesController')



router.get('/:buscar', validateJWT, getPlaces);


module.exports = router;
