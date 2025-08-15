export const saveDecksToStorage = (decks) => {
  localStorage.setItem('decks', JSON.stringify(decks));
};

export const loadDecksFromStorage = () => {
  const decksStr = localStorage.getItem('decks');
  return decksStr ? JSON.parse(decksStr) : [];
};
