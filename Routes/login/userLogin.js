const express = require('express');

const router = express.Router();

const login = require('../../Controllers/login/userLoginController');


router.post('/sign', login.newUs);
router.post('/', login.userAuth);

router.get('/', login.tasks);
router.get('/privtasks', login.verifyToken ,login.privTasks);


module.exports = router;


