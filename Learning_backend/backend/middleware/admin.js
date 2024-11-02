const { usernameSchema, passwordSchema } = require('../type/type');
const { Admin } = require('../db/db');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

const adminSignupMiddleware = async (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    const usernameParsed = usernameSchema.safeParse(username);
    const passwordParsed = passwordSchema.safeParse(password);

    if (!usernameParsed.success || !passwordParsed.success) {
        return res.status(400).json({
            message: "Invalid input"
        });
    }

    try {
        // Check if admin already exists
        const existingAdmin = await Admin.findOne({ username });
        
        if (existingAdmin) {
            return res.status(409).json({ message: "Admin already exists" });
        }

        next();
    } catch (error) {
        console.error('Middleware error:', error);
        res.status(500).json({ message: "Server error" });
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

module.exports = {
    adminSignupMiddleware,
    userLoginMiddleware
}