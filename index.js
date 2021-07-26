const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Import the Quote Model
const Quote = require('./Models/Quote');

const app = express();


// Middleware - helps modify the request
app.use(express.json());



// Routes of API
app.get('/quotes',(req,res)=>{
    // get all quotes from the DB
    Quote.find()
        .then((result)=>{
            res.send(result)
        })
        .catch((error)=>{
            res.send(error.message)
        })

})

// Get a specific quote
app.get('/quotes/:id',(req,res)=>{
    Quote.findById(req.params.id)
        .then((result)=>{
            res.send(result)
        })
        .catch((error)=>{
            res.send(error.message);
        })
    
})

// Post request - create a quote
app.post('/quotes',(req,res)=>{
   const quote = new Quote(req.body);
   quote.save()
    .then((result)=>{
        res.send(result)
    })
    .catch((error)=>{
        res.send(error.message)
    })
})

// Update a quote
app.patch('/quotes/:id',(req,res)=>{
    Quote.findByIdAndUpdate(req.params.id,req.body)
        .then((result)=>{
            res.send(result)
        })
        .catch((error)=>{
            res.send(error.message)
        })
})

// Delete a quote
app.delete('/quotes/:id',(req,res)=>{
    Quote.findByIdAndDelete(req.params.id)
        .then((result)=>{
            res.send('Quote Deleted Successfully')
        })
        .catch((error)=>{
            res.send(error.message)
        })
})



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


