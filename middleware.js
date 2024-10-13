const express = require("express");
const z = require("zod");
const app = express();

app.use(express.json());
const Schema = z.object({
    username: z.string(),
    password: z.string(),
});

const userMiddleware = (req,res,next)=>{
    username = req.body.username;
    password = req.body.password;

    if(username != 'adarsha' || password != '123456'){
        res.status(401).send('Unauthorized');
    }else{
        // res.json('Authorized');
        next();
    }
}

app.get('/',userMiddleware, (req,res)=>{
    res.send('Welcome to home page');
})

app.use((err,req,res,next)=>{
    res.status(500).send('There was an error');
});

app.listen(3000);

