import React from 'react';

function DeckList({ decks, selectedDeckId, onSelectDeck }) {
  return (
    <div className="deck-list">
      <h2>Decks</h2>
      <ul>
        {decks.map((deck) => (
          <li
            key={deck.id}
            className={deck.id === selectedDeckId ? 'selected' : ''}
            onClick={() => onSelectDeck(deck.id)}
          >
            {deck.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DeckList;
