const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(express.json());
app.use(bodyParser.json());

const adminRouter = require('./route/admin');
const userRouter = require('./route/user');

app.use(bodyParser.json());

app.use('/admin', adminRouter);
app.use('/user', userRouter);

app.listen(3000, () => {
    console.log('Server is running on port 3000');
})
