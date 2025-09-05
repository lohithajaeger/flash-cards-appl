// import React, { useState } from 'react';
// import './Flashcard.css'; // We'll add CSS for flipping animation here

// function Flashcard({ card }) {
//   const [flipped, setFlipped] = useState(false);

//   return (
//     <div 
//       className={`flashcard ${flipped ? 'flipped' : ''}`}
//       onClick={() => setFlipped(!flipped)}
//     >
//       <div className="inner">
//         <div className="front">
//           {card.question}
//         </div>
//         <div className="back">
//           {card.answer}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Flashcard;

import React, { useState } from "react";
import "./Flashcard.css";

function Flashcard({ card, onDelete }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`flashcard ${flipped ? "flipped" : ""}`}>
      <div className="inner" onClick={() => setFlipped(!flipped)}>
        <div className="front">{card.question}</div>
        <div className="back">{card.answer}</div>
      </div>
      <button
        className="delete-btn"
        onClick={() => onDelete(card._id)}
      >
        ❌
      </button>
    </div>
  );
}

export default Flashcard;
