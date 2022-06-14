const jwt = require('jsonwebtoken');
const User = require('../models/user');
const asyncHandler = require('express-async-handler');

const verifyToken = asyncHandler( async(req, res, next) => {
    if (req.headers 
        && req.headers.cookie 
        && req.headers.cookie.split('=')[0] === 'token') {

            try {
            const decoded = jwt.verify(req.headers.cookie.split('=')[1], process.env.JWT_SECRET)
            console.log(decoded)

            req.user = await User.findById(decoded.id)


            } catch (err) {
                res.status(401).json("Not Authorized")
            }
            next()
            
    } else {
        res.status(401).json('Not authorized (no token)')
    }
    // if (!token){
    //     res.status(401)
    //     throw new Error('Not authorized (no token)')
    // }
});

module.exports = verifyToken;