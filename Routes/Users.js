const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/UsersController");

router.post('/', UserController.CreateUser);
router.get('/', UserController.VisualizerUsers);


module.exports = router;