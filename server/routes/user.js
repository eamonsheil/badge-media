const express = require('express');
const router = express.Router();
const { register, login, getMe } = require('../controllers/auth_controller');
const verifyToken = require('../middleware/authJWT')

router.get('/me', verifyToken, getMe)
router.post('/login', login);
router.post('/register', register);

router.get('/hidden-content', (req, res) => {
    if(!user){
    res.status(403).json("you cannot get it")
    }
    else {
        res.send({message: 'you can, in fact, get it'})
    }
})
module.exports = router;