const express = require('express');
const router = express.Router();
const quoteController = require('../controllers/quoteController');
const {authenticate} = require('../helpers/validation');

// Routes of API
router.get('/', authenticate, quoteController.getAllQuotes);

// Get a specific quote
router.get('/:id',authenticate, quoteController.getQuoteById);

// Post request - create a quote
router.post('/', authenticate, quoteController.createQuote);

// Update a quote
router.patch('/:id',authenticate, quoteController.updateQuote)

// Delete a quote
router.delete('/:id',authenticate, quoteController.deleteQuote)

module.exports = router;