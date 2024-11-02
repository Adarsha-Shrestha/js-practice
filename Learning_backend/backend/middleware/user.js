const { usernameSchema, passwordSchema } = require('../type/type');
const { User } = require('../db/db');
const jwt = require('jsonwebtoken');
const { JWT_SECRET }= require('../config');

const userSignupMIddleware = async(req, res, next)=>{
    const {username, password} = req.body;

    const usernameParsed = usernameSchema.safeParse(username);
    const passwordParsed = passwordSchema.safeParse(password);

    if(!usernameParsed.success || !passwordParsed.success){
        return res.status(400).json({
            message: "Invalid input"
        });
    }

    try{
        const existingUser = await User.findOne({username});

        if(existingUser){
            return res.status(409).json({message: "User already exists"});
        }

        next();
    }catch(error){
        console.error('Middleware error:', error);
        res.status(500).json({message: "Server error"});
    }
}

const userLoginMiddleware = async(req, res, next)=>{
    const token = req.headers.authorization;
    const words = token.split(' ');
    const tokenValue = words[1];
    const decoded = jwt.verify(tokenValue, JWT_SECRET);
    if(decoded.username){
        next();
    }else{
        res.status(401).json({message: "Unauthorized"});
    }
}

module.exports = userSignupMIddleware;