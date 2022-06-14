const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const asyncHandler = require('express-async-handler');
const User = require('../models/user');



const getMe = asyncHandler( async(req, res) => {
    res.status(200).json(req.user)
})


const register = asyncHandler(async(req, res) => {
    
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    const user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: hashedPassword
    })


    if (user) {
        const token = await generateToken(user._id)
        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            accessToken: token
        })
    }
})

const login = asyncHandler(async (req, res) => {
    const user = await User.findOne({email: req.body.email})


    if (user && (await bcrypt.compare(req.body.password, user.password))) {
        const token = generateToken(user._id);
    
        return res
            .cookie("token", token, {
                httpOnly: true
            })
            .json({
                user: {
                    id: user._id,
                    email: user.email,
                    name: user.name
                },
                message: "Login Successful",
                token: token,
            })
    } else {
        res.status(400)
        throw new Error ('Invalid Login')
    }


        
})

function generateToken(id) {
    const token = jwt.sign({
        id: id
    },  process.env.JWT_SECRET, { 
        expiresIn: "1h"
    })
    return token;
}


module.exports = {
    register,
    login,
    getMe
}