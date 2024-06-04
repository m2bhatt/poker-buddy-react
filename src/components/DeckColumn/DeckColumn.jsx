import Card from "../Card/Card";
import "./DeckColumn.scss";

const DeckColumn = ({ deck, suit, pocketHand, setPocketHand,  boardHand, setBoardHand, activeCardContainer, setActiveCardContainer }) => {
  const handleOnClick = (card) => {
    const cardData = { value: card.value, suit: card.suit };
    let newHand;

    if (activeCardContainer === 'pocketHand') {
      newHand = [...pocketHand, cardData];

      if (newHand.length >= 2) {
        setActiveCardContainer('boardHand')
      }
      setPocketHand(newHand)
    } else {
      newHand = [...boardHand, cardData];
      setBoardHand(newHand)
    }
  };

  return (
    <div className="DeckColumn">
      {deck.map((card, index) => {
        if (card.suit != suit) return;

        return (
          <Card
            key={index}
            value={card.value}
            suit={card.suit}
            isActive={true}
            index={index}
            handleOnClick={handleOnClick}
          />
        );
      })}
    </div>
  );
};

export default DeckColumn;
