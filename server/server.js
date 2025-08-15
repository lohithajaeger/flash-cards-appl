require('dotenv').config();
const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch((err) => console.log('MongoDB connection error:', err));

const express = require('express');
const cors = require('cors');
const decksRouter = require('./routes/decks');
const cardsRouter = require('./routes/cards');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/decks', decksRouter);
app.use('/api/cards', cardsRouter);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
