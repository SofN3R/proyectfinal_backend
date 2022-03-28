
/*

   Path: /api/public

*/

const express = require('express');

const router = express.Router();
const { validateJWT } = require('../../middlewares/validateJWT');


const {getAllPublic, postTrip} = require('../../Controllers/Entry/publicTripController');



router.put('/:idus/:idpub', postTrip);

router.get('/',  validateJWT, getAllPublic);

module.exports = router;
