/*

   Path: /api/upload/user/:id

*/

const { Router } = require('express');

const fileUpload = require('express-fileupload');

const { validateJWT } = require('../../middlewares/validateJWT');

const router = Router();

const { putImg, returnImage } = require('../../Controllers/upload/uploadsController');

router.use(fileUpload());

router.get('/:idus/:idtrip', validateJWT, putImg);

router.get('/:idimg', returnImage);


module.exports = router;
