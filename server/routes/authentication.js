const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const passport = require('passport');
const validateRegisterInput = require('../validation/register');
const validateLoginInput = require('../validation/login');

const User = require('../models/User');

router.post('/register', async function(req, res) {
console.log(req.body)
    const { errors, isValid } = validateRegisterInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

try {
    const user=  await User.findOne({email: req.body.email})
    if(user) {
        return res.status(400).json({
            email: 'Email already exists'
        });
    } else {
        const avatar = gravatar.url(req.body.email, {
            s: '200',
            r: 'pg',
            d: 'mm'
        });
        const newUser = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            role:req.body.role,
            technology:[req.body.technology],
            avatar
        });
        
     const salt =await bcrypt.genSalt(10) 
     const hash= await bcrypt.hash(newUser.password, salt)
                 newUser.password = hash;
                 const userData= await newUser.save()
                           if(userData) {
                            res.json(userData)
                           }
                                
                            
                    }
} catch (error) {
    if(error) console.error('There was an error', error);
}
});

router.post('/login', async (req, res) => {

    const { errors, isValid } = validateLoginInput(req.body);

    if(!isValid) {
        return res.status(400).json(errors);
    }

   
try {
    const email = req.body.email;
    const password = req.body.password;  

   const user= await User.findOne({email})
        if(!user) {
            errors.email = 'User not found'
            return res.status(404).json(errors);
        }
        const isMatch= await bcrypt.compare(password, user.password)
                    if(isMatch) {
                        const payload = {
                            id: user.id,
                            name: user.name,
                            role:user.role,
                            email:user.email,
                            avatar: user.avatar
                        }
                const token =await jwt.sign(payload, 'secret', {  expiresIn: 3600 })
                                res.json({
                                    success: true,
                                    token: `Bearer ${token}`
                                });
                            }
                    else {
                        errors.password = 'Incorrect Password';
                        return res.status(400).json(errors);
                    }
             
} catch (error) {
    if(error) console.error('There is some error ', error);
}
});

router.get('/me', passport.authenticate('jwt', { session: false }), (req, res) => {
    return res.json({
        id: req.user.id,
        name: req.user.name,
        role:req.user.role,
        email: req.user.email
    });
});

module.exports = router;