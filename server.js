require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

// Middlewares
app.use(bodyParser.urlencoded( {extended:true}));
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

const eventRoutes = require('./routes/admin/events');

// Routes
app.use('/events', eventRoutes);