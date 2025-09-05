import React, { useState, useEffect } from 'react';
import DeckList from './components/DeckList';
import FlashcardList from './components/FlashcardList';
import AddCardForm from './components/AddCardForm';
import './styles/app.css';
import { saveDecksToStorage, loadDecksFromStorage } from './utils/storage';

const starterDecks = [
  {
    id: Date.now(),
    name: "Sample Deck",
    cards: [
      { id: Date.now() + 1, question: "What is React?", answer: "A JS library for building UIs" },
      { id: Date.now() + 2, question: "What is a component?", answer: "Reusable piece of UI" }
    ]
  }
];

function App() {
  const [decks, setDecks] = useState(() => {
  const loaded = loadDecksFromStorage();
  return loaded.length ? loaded : starterDecks;
});

  const [selectedDeckId, setSelectedDeckId] = useState(decks.length ? decks[0].id : null);

  useEffect(() => {
    saveDecksToStorage(decks);
  }, [decks]);

  const handleAddCard = (card) => {
    setDecks((prevDecks) =>
      prevDecks.map((deck) =>
        deck.id === selectedDeckId
          ? { ...deck, cards: [...deck.cards, card] }
          : deck
      )
    );
  };

  const selectedDeck = decks.find((deck) => deck.id === selectedDeckId);

  return (
    <div className="App">
      <DeckList 
        decks={decks} 
        selectedDeckId={selectedDeckId} 
        onSelectDeck={setSelectedDeckId} 
      />
      {selectedDeck ? (
        <>
          <FlashcardList cards={selectedDeck.cards} />
          <AddCardForm onAddCard={handleAddCard} deckId={selectedDeckId} />
        </>
      ) : (
        <p>No deck selected</p>
      )}
    </div>
  );
}

export default App;
