const express = require('express');
// const adminSignupMiddleware = require('../middleware/admin');
const { adminSignupMiddleware, userLoginMiddleware } = require('../middleware/admin');
const { Admin } = require('../db/db');
const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config')
const router = express.Router();

router.post('/signup', adminSignupMiddleware ,async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;

    try {
        await Admin.create({
            username: username,
            password: password
        });
        res.json({ msg: "Admin created" });
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

router.get('/data', async(req,res)=>{
    const adminData = await Admin.find({});
    res.json({
        adminData
    });
})

module.exports = router;