const express = require ('express');

const router = express.Router();

const {showNannies, showNanniesbyCountry, showNanniesByID} = require('../../Controllers/Nannies/nanniesController');
const { validateJWT } = require('../../middlewares/validateJWT');



router.get('/', validateJWT , showNannies);
router.get('/:country', validateJWT ,showNanniesbyCountry);
router.get('/id/:idnana', validateJWT, showNanniesByID);



module.exports = router;
