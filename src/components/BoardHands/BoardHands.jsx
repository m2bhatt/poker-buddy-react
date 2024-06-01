import Card from "../Card/Card";
import { useEffect } from "react";
import "./BoardHands.scss";

const BoardHands = ({ boardHand, className }) => {
  if (!boardHand) {
    return <div>loading..</div>;
  }

  return (
    <>
      <aside className={`boardhands ${className}`}>
        {[...boardHand, {}, {}, {}, {}, {}].slice(0, 5).map ((card, index) => (
          <Card
          key={`empty_${index}`}
          value={card.value}
          suit={card.suit}
          isActive="true" />
        ))}
        </ aside>
    </>
  );
};

export default BoardHands;
