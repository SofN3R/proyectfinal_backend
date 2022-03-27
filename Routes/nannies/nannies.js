const express = require ('express');

const router = express.Router();

const showNannies = require('../../Controllers/Nannies/nanniesController');
const { validateJWT } = require('../../middlewares/validateJWT');



router.get('/', validateJWT , showNannies.showNannies);
router.get('/:country', validateJWT ,showNannies.showNanniesbyCountry);




module.exports = router;
