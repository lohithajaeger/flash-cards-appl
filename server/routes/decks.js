const express = require('express');
const Deck = require('../models/Deck');
const router = express.Router();

// GET all decks
router.get('/', async (req, res) => {
  const decks = await Deck.find();
  res.json(decks);
});

// CREATE new deck
router.post('/', async (req, res) => {
  const deck = new Deck({ name: req.body.name });
  await deck.save();
  res.status(201).json(deck);
});

// DELETE deck and its cards
router.delete('/:id', async (req, res) => {
  await Deck.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
