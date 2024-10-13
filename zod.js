const express = require("express");
const z = require("zod");
const app = express();

app.use(express.json());

const Schema = z.object({
    username:z.string().min(2),
    password:z.string()
    .min(8)
    .regex(/[A-Z]/)
    .regex(/\d/)
    .regex(/[\W_]/)
});

const Validator = (req,res,next)=>{
    const username = req.body.username;
    const password = req.body.password;
    const userData = {
        username: username,
        password: password
    };
    try{
        Schema.parse(userData);
        next();
    }
    catch(err){
        res.status(400).send("Invalid User Credential");
    }
}

app.post("/",Validator, (req, res) => {
    res.send('User Credential is valid');    
});

app.use((err,req,res,next)=>{
    res.status(500).send('There was an error');
});

app.listen(3000);