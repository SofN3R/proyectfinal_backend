/*
   Path: /api/log
*/

const express = require('express');

const { check } = require('express-validator');

const router = express.Router();

const { updateUsers, deleteUser, login } = require('../../Controllers/login/userLoginController');
const { validateFields } = require('../../middlewares/validateFields');

// Login User
router.post('/',
   [

      check('email', 'El email es obligatorio').isEmail(),
      check('password', 'La contraseña es obligatoria').not().isEmpty(),
      validateFields


   ],
   login
);


// UPDATE USER
router.put('/:id',
   [
      check('name', 'El nombre es obligatorio').not().isEmpty(),
      check('lastname', 'El apellido es obligatorio').not().isEmpty(),
      check('email', 'El email es obligatorio').isEmail(),
      check('telphone', 'El telefono es obligatorio').not().isEmpty(),
      check('role', 'El rol es obligatorio').not().isEmpty(),
      validateFields

   ], updateUsers
);

// delete user
router.delete('/:id', deleteUser);





module.exports = router;


