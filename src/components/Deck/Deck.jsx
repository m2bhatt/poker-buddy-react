import DeckColumn from "../DeckColumn/DeckColumn";
import "./Deck.scss";

const suits = ["Hearts", "Diamonds", "Spades", "Clubs"];

const Deck = ({
  deck,
  pocketHand,
  setPocketHand,
  boardHand,
  setBoardHand,
  activeCardContainer,
  setActiveCardContainer
}) => {
  return (
    <aside className="deck">
      {suits.map((suit) => (
        <DeckColumn
          key={suit}
          deck={deck}
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
