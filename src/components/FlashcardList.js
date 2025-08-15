import React from 'react';
import Flashcard from './Flashcard';

function FlashcardList({ cards }) {
  if (!cards || cards.length === 0) {
    return <p>No flashcards yet. Add some!</p>;
  }

  return (
    <div className="flashcard-list">
      {cards.map((card) => (
        <Flashcard key={card.id} card={card} />
      ))}
    </div>
  );
}

export default FlashcardList;
