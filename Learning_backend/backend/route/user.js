const express = require('express');
const userSignupMIddleware = require('../middleware/user');
const { User } = require('../db/db');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config')
const router = express.Router();

router.post('/signup', userSignupMIddleware ,async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    try {
        await User.create({
            username: username,
            password: password
        });
        res.json({ msg: "User created" });
    } catch (err) {
        res.status(500).json({ msg: "Error" });
    }
});

router.post('/login', async(req,res)=>{
    const {username, password} = req.body;
    
    const admin = await Admin.findOne({username});
    if(admin.password === password){
        const token = jwt.sign({username}, JWT_SECRET);
        res.json({token});
    }else{
        res.status(401).json({message: "Unauthorized"});
    }
});

router.get('/data',async(req,res)=>{
    const userData = await User.find({});
    res.json({
        userData
    });
})

module.exports = router;