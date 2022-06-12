const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const signup = async (req, res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: await bcrypt.hash(req.body.password, 8),
    });

    user.save((err,user) => {
        if (err) {
            res.status(500)
               .send({
                   message: err
               });
               return;
        } else {
            res.status(200)
               .send({
                   message: 'User registered successfully'
               })
        }
    });
};

const login = async (req, res) => {
    User.find({ email: req.body.email})
        .exec((err, user) => {
            if (err){ 
                res.status(500)
                   .send({
                        message: err
                   });
                return;
            }
            if (!user) {
                return res.status(404)
                          .send({
                              message: "User not found"
                          });
            }
            const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);

            if (!passwordIsValid) {
                return res.status(401)
                          .send({
                              accessToken: null,
                              message: "Invalid Password"
                          })
            }

            const token = jwt.sign({
                id: user.id
            }, process.env.JWT_SECRET, { 
                expiresIn: 600000
            });

            res.status(200)
               .send({
                   user: {
                       id: user._id,
                       email: user.email,
                       name: user.name
                   },
                   message: "Login Successful",
                   accessToken: token,
               });
        });
};

module.exports = {
    signup,
    login
}