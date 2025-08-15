const express = require('express');
const Card = require('../models/Card');
const router = express.Router();

// GET cards for a deck
router.get('/deck/:deckId', async (req, res) => {
  const cards = await Card.find({ deck: req.params.deckId });
  res.json(cards);
});

// CREATE card
router.post('/', async (req, res) => {
  const card = new Card({
    deck: req.body.deck,
    question: req.body.question,
    answer: req.body.answer
  });
  await card.save();
  res.status(201).json(card);
});

// DELETE card
router.delete('/:id', async (req, res) => {
  await Card.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
