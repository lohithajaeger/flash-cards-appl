const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  deck: { type: mongoose.Schema.Types.ObjectId, ref: 'Deck', required: true },
  question: { type: String, required: true },
  answer: { type: String, required: true }
});

module.exports = mongoose.model('Card', CardSchema);
