// Import the Quote Model
const Quote = require('../models/Quote.js');


const getAllQuotes = (req,res)=> {
    // get all quotes from the DB
    Quote.find()
        .then((result)=>{
            res.send(result)
        })
        .catch((error)=>{
            res.send(error.message)
        })

}

const getQuoteById = (req,res)=>{
    Quote.findById(req.params.id)
        .then((result)=>{
            res.send(result)
        })
        .catch((error)=>{
            res.send(error.message);
        })
    
}

const createQuote = (req,res)=>{
    const quote = new Quote(req.body);
    quote.save()
     .then((result)=>{
         res.send(result)
     })
     .catch((error)=>{
         res.send(error.message)
     })
 }

 const updateQuote = (req,res)=>{
    Quote.findByIdAndUpdate(req.params.id,req.body)
        .then((result)=>{
            res.send(result)
        })
        .catch((error)=>{
            res.send(error.message)
        })
}

const deleteQuote = (req,res)=>{
    Quote.findByIdAndDelete(req.params.id)
        .then((result)=>{
            res.send('Quote Deleted Successfully')
        })
        .catch((error)=>{
            res.send(error.message)
        })
}


module.exports = {
    getAllQuotes,
    getQuoteById,
    createQuote,
    updateQuote,
    deleteQuote
}
