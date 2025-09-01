let deck = [];

const creacreDeck = () => {
  const tipos = ['C', 'D', 'H', 'S']; // Corazones, Diamantes, Tréboles, Picas
  const especiales = ['A', 'J', 'Q', 'K']; // As, Jota, Reina, Rey
  for (let i = 2; i < 10; i++) {
    for (let tipo of tipos) {
      deck.push(i + tipo);
    }
  }

  for (let tipo of tipos) {
    for (let esp of especiales) {
      deck.push(esp + tipo);
    }
  }
  console.log(deck);
  
  deck = _.shuffle(deck);
  console.log(deck);
  return deck;
}
creacreDeck();