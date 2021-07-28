const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Routers
const quoteRouter = require('./routes/quoteRouter');

const app = express();


// Middleware - helps modify the request
app.use(express.json());

// Routes for API
app.use('/quotes',quoteRouter)



// Connect to Our Database
const URL = process.env.DB_URL;
mongoose.connect(URL,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log('Database Connection Established...');

        // Start the Server
        app.listen(3000,()=>{
            console.log('Server is listening on port 3000 ...')
        })
    })
    .catch(()=>{
        console.log('Database Connection Failed !!')
    })


