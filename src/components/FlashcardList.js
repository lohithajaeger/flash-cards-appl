// import React from 'react';
// import Flashcard from './Flashcard';

// function FlashcardList({ cards }) {
//   if (!cards || cards.length === 0) {
//     return <p>No flashcards yet. Add some!</p>;
//   }

//   return (
//     <div className="flashcard-list">
//       {cards.map((card) => (
//         <Flashcard key={card.id} card={card} />
//       ))}
//     </div>
//   );
// }

// export default FlashcardList;

import React, { useEffect, useState } from "react";
import Flashcard from "./Flashcard";

function FlashcardList() {
  const [cards, setCards] = useState([]);

  // fetch cards when component loads
  useEffect(() => {
    fetch("/api/cards")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  // delete card handler
  const deleteCard = async (id) => {
    await fetch(`/api/cards/${id}`, { method: "DELETE" });
    setCards(cards.filter((c) => c._id !== id));
  };

  if (!cards || cards.length === 0) {
    return <p>No flashcards yet. Add some!</p>;
  }

  return (
    <div className="flashcard-list">
      {cards.map((card) => (
        <Flashcard key={card._id} card={card} onDelete={deleteCard} />
      ))}
    </div>
  );
}

export default FlashcardList;
