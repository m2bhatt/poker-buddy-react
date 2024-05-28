import Card from "../Card/Card";
import "./DeckColumn.scss";

const DeckColumn = ({ deck, suit }) => {

  const handleOnClick = (card) => {
    const cardData = { value: card.value, suit: card.suit };
    localStorage.setItem("card", JSON.stringify(cardData));
  };

  return (
    <div className="DeckColumn">
      {deck.map((card, index) => {
        if (card.suit != suit) return;

        return (
          <Card key={index} value={card.value} suit={card.suit} index={index} handleOnClick={handleOnClick} />
        );
      })}
    </div>
  );
};

export default DeckColumn;

//TODO - remove index and use filter
