import DeckColumn from "../DeckColumn/DeckColumn";
import "./Deck.scss";

const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];

const Deck = ({
  deck,
  setDeck,
  pocketHand,
  setPocketHand,
  boardHand,
  setBoardHand,
  activeCardContainer,
  setActiveCardContainer,
  className
}) => {
  return (
    <aside className={`deck ${className}`}>
      {suits.map((suit) => (
        <DeckColumn
          key={suit}
          deck={deck}
          setDeck={setDeck}
          suit={suit}
          pocketHand={pocketHand}
          setPocketHand={setPocketHand}
          boardHand={boardHand}
          setBoardHand={setBoardHand}
          activeCardContainer={activeCardContainer}
          setActiveCardContainer={setActiveCardContainer}
         
        />
      ))}
    </aside>
  );
};

export default Deck;
