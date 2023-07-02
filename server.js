const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
require('./db/conn');
// const Faculty = require('./model/facultySchema');

app.use(express.json());

app.use(require('./router/auth'));

const port = process.env.PORT;


const middleware = (req, res, next) => {
    console.log(`Hello my middleware`);
    next();
}

app.get('/about', middleware, (req, res) => {
    // res.cookie("Rajdeep", 'Nath');
    res.send('This is the about page')
}
);


app.listen(port, () => {
    console.log(`server is running at port ${port}`);
}
);