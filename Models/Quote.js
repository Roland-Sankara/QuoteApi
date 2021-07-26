const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const QuoteSchema = new Schema({
    text: {
        type:String,
        required: true
    },
    author: {
        type:String,
        required: true
    },
    date:{
        type:Date,
        default: Date.now
    }
});

// Create a model out of the Schema

const Quote = mongoose.model('Quote',QuoteSchema);

module.exports = Quote;