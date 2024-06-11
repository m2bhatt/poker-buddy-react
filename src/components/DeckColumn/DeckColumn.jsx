import "./DeckColumn.scss";
import Card from "../Card/Card";

const DeckColumn = ({
  deck,
  setDeck,
  suit,
  pocketHand,
  setPocketHand,
  boardHand,
  setBoardHand,
  activeCardContainer,
  setActiveCardContainer,
}) => {
  const handleOnClick = (card) => {
    const cardData = { value: card.value, suit: card.suit };
    let newHand;

    if (activeCardContainer === "pocketHand") {
      newHand = [...pocketHand, cardData];

      if (newHand.length >= 2) {
        setActiveCardContainer("boardHand");
      }

      setPocketHand(newHand);
    } else {
      if (boardHand.length < 5) {
        newHand = [...boardHand, cardData];
        setBoardHand(newHand);
      }
    }

    const updatedDeck = deck.map((c) =>
      c.value === card.value && c.suit === card.suit
        ? { ...c, isActive: false }
        : c
    );
    setDeck(updatedDeck);
  };

  return (
    <div className="deckcolumn">
      {deck
        .filter((card) => card.suit === suit)
        .map((card, index) => {
          return (
            <Card
              key={index}
              value={card.value}
              suit={card.suit}
              isActive={card.isActive}
              index={index}
              handleOnClick={handleOnClick}
            />
          );
        })}
    </div>
  );
};

export default DeckColumn;
