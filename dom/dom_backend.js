const express = require('express');
const cors = require('cors'); // Import CORS
const app = express();

app.use(cors()); // Enable CORS for all routes
app.get('/sum',(req,res)=>{
    const a = parseInt(req.query.a);
    const b = parseInt(req.query.b);
    const sum = a + b;
    res.send(`The sum of ${a} and ${b} is ${sum}`);
});

app.listen(3000)