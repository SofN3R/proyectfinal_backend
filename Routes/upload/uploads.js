/*

   Path: /api/upload/user/:id

*/

const { Router } = require('express');

const fileUpload = require('express-fileupload');

const { validateJWT } = require('../../middlewares/validateJWT');

const router = Router();

const { putImg } = require('../../Controllers/upload/uploadsController');

router.use(fileUpload());

router.put('/:idus/:idtrip', validateJWT, putImg);


module.exports = router;
