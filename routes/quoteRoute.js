const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quoteController.js');

// Routes of API
router.get('/', quoteController.getAllQuotes);

// Get a specific quote
router.get('/:id',quoteController.getQuoteById);

// Post request - create a quote
router.post('/', quoteController.createQuote);

// Update a quote
router.patch('/:id', quoteController.updateQuote)

// Delete a quote
router.delete('/:id', quoteController.deleteQuote)

module.exports = router;