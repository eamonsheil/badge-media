const express = require('express');
const router = express.Router();
const {signup, login} = require('../controllers/auth_controller')


router.post('/users', login);
router.post('/users', signup);


module.exports = router;