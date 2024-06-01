import { useEffect } from "react";
import Card from "../Card/Card";
import "./DeckColumn.scss";

const DeckColumn = ({ deck, suit, pocketHand, setPocketHand }) => {

  const handleOnClick = (card) => {
    const cardData = { value: card.value, suit: card.suit };
    let newHand = [...pocketHand];

    if (newHand.length === 0) {
      newHand = [cardData];
    } else if 
      (newHand.length === 1) {
        newHand = [newHand[0], cardData]
      }
    else {
      newHand = [newHand[1], cardData]
    }

    setPocketHand(newHand);

  };

  return (
    <div className="DeckColumn">
      {deck.map((card, index) => {
        if (card.suit != suit) return;

        return (
          <Card key={index} value={card.value} suit={card.suit} isActive={true} index={index} handleOnClick={handleOnClick} />
        );
      })}
    </div>
  );
};

export default DeckColumn;

//TODO - remove index and use filter

  // cardDataArray.forEach((obj) => {
    //   if (Object.keys(newHand).length < 3) {
    //     newHand.unshift(obj);
    //   } else {
    //     newHand = [newHand[0], cardData]
    //     // newHand.shift();
    //     // newHand.push(obj)
    //   }
    // });

    // while (newHand.length > 2) {
    //   newHand.shift()
    // }