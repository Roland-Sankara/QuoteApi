const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Quote Route
const quoteRoute = require('./routes/quoteRoute');

const app = express();


// Middleware - helps modify the request
app.use(express.json());

// Routes for API
app.use('/quotes',quoteRoute)



// Connect to Our Database
const URL = process.env.DB_URL;
const PORT = process.env.PORT || 3000;
mongoose.connect(URL,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log('Database Connection Established...');

        // Start the Server
        app.listen(PORT,()=>{
            console.log('Server is listening on port 3000 ...')
        })
    })
    .catch(()=>{
        console.log('Database Connection Failed !!')
    })


