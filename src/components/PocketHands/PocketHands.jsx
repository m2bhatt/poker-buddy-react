import Card from "../Card/Card";
import { useEffect } from "react";
import "./PocketHands.scss";

const PocketHands = ({ pocketHand, className }) => {
  if (!pocketHand) {
    return <div>loading..</div>;
  }

  return (
    <aside className={`pockethands ${className}`}>
      {[...pocketHand, {}, {}].slice(0, 2).map((card, index) => (
        <Card
          key={`empty_${index}`}
          value={card.value}
          suit={card.suit}
          isActive="true"
        />
      ))}
    </aside>
  );
};

export default PocketHands;
