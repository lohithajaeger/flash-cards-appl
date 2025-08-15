import React, { useState } from 'react';

function AddCardForm({ onAddCard, deckId }) {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!question || !answer) return;

    onAddCard({ id: Date.now(), question, answer, deck: deckId });
    setQuestion('');
    setAnswer('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="text" 
        placeholder="Question"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="Answer"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
      />
      <button type="submit">Add Card</button>
    </form>
  );
}

export default AddCardForm;
