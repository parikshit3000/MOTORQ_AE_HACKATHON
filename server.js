require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require("cors");

const app = express();

// Middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

// Ports
const port = process.env.PORT || 3000;
app.listen(port, (req, res) => {
    console.log(`Server started at port ${port}`);
});

// MongoDB Connection
const uri = process.env.MONGODB_URI;
mongoose
    .connect(uri, { useUnifiedTopology: true, useNewUrlParser: true })
    .then(() => console.log('MongoDB connected!'))
    .catch(err => console.log('Error:- ' + err));

// Allow CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization, auth-token"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

app.use(cors());

const eventRoutes = require('./routes/events');
// const userRoutes = require('./routes/user/users');

// Routes
app.use('/events', eventRoutes);
// app.use('/user', userRoutes);