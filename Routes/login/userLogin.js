/*
   Path: /api/log
*/

const express = require('express');

const { check } = require('express-validator');

const router = express.Router();

const { updateUsers, deleteUser, login, logGoogle, renewToken } = require('../../Controllers/login/userLoginController');
const { validateFields } = require('../../middlewares/validateFields');
const { validateJWT } = require('../../middlewares/validateJWT');


// Login User
router.post('/',
   [

      check('email', 'El email es obligatorio').isEmail(),
      check('password', 'La contraseña es obligatoria').not().isEmpty(),
      validateFields


   ],
   login
);

// login Google
router.post('/google',
   [

      check('token', 'El token es obligatorio').not().isEmpty(),
      validateFields


   ],
   logGoogle
);

//
router.get('/renew', validateJWT, renewToken);

// UPDATE USER
router.put('/:id',
   [
      validateJWT,
      check('name', 'El nombre es obligatorio').not().isEmpty(),
      check('lastname', 'El apellido es obligatorio').not().isEmpty(),
      check('email', 'El email es obligatorio').isEmail(),
      check('telphone', 'El telefono es obligatorio').not().isEmpty(),
      check('role', 'El rol es obligatorio').not().isEmpty(),
      validateFields

   ], updateUsers
);

// delete user
router.delete('/:id', validateJWT , deleteUser);





module.exports = router;


