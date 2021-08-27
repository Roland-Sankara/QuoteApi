const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

// Quote Route
const quoteRoute = require('./routes/quoteRoute');
// UserRoute
const userRoute = require('./routes/usersRoute');

const app = express();

//CORS
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, authorization');
	next();
});


// Routes for API
app.get('/api/v1/',(req,res)=>{
    res.send('Welcome to the Quote API')
})

// Middleware - helps modify the request
app.use(express.json());

app.use('/api/v1/quotes',quoteRoute);
app.use('/api/v1/users',userRoute);



// Connect to Our Database
const URL = process.env.DB_URL;
const PORT = process.env.PORT || 3000;
mongoose.connect(URL,{ useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>{
        console.log('Database Connection Established...');
    })
    .catch(()=>{
        console.log('Database Connection Failed !!');
    });

// Start the Server
app.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}...`);
});


