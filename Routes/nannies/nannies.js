const express = require ('express');

const router = express.Router();

const showNannies = require('../../Controllers/Nannies/nanniesController');

router.get('/', showNannies.showNannies);
router.get('/country', showNannies.showNanniesById);




module.exports = router;
