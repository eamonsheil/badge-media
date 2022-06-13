const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/auth_controller');
const verifyToken = require('../middleware/authJWT')


router.post('/login', login);
router.post('/register', register);

router.get('/hidden-content', verifyToken, (req, res) => {
    if(!user){
    res.status(403).json("you cannot get it")
    }
    else {
        res.send({message: 'you can, in fact, get it'})
    }
})
module.exports = router;