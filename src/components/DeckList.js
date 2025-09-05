// import React from 'react';

// function DeckList({ decks, selectedDeckId, onSelectDeck }) {
//   return (
//     <div className="deck-list">
//       <h2>Decks</h2>
//       <ul>
//         {decks.map((deck) => (
//           <li
//             key={deck.id}
//             className={deck.id === selectedDeckId ? 'selected' : ''}
//             onClick={() => onSelectDeck(deck.id)}
//           >
//             {deck.name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default DeckList;

import React, { useEffect, useState } from "react";

function DeckList() {
  const [decks, setDecks] = useState([]);
  const [newDeck, setNewDeck] = useState("");

  useEffect(() => {
    fetch("/api/decks")
      .then(res => res.json())
      .then(data => setDecks(data));
  }, []);

  const addDeck = async () => {
    if (!newDeck.trim()) return;
    const res = await fetch("/api/decks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: newDeck })
    });
    const data = await res.json();
    setDecks([...decks, data]);
    setNewDeck("");
  };

  return (
    <div>
      <h2>Decks</h2>
      <ul>
        {decks.map(deck => (
          <li key={deck._id}>{deck.name}</li>
        ))}
      </ul>

      <input
        type="text"
        placeholder="New deck name"
        value={newDeck}
        onChange={(e) => setNewDeck(e.target.value)}
      />
      <button onClick={addDeck}>Add Deck</button>
    </div>
  );
}

export default DeckList;
