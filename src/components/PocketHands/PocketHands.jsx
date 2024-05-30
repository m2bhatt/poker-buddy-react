import Card from "../Card/Card";
import { useEffect } from "react";
import "./PocketHands.scss";

const PocketHands = ({ pocketHand, setPocketHand, className }) => {
  const handleOnClick = () => {
    setPocketHand(pocketHand);
  };

  if (!pocketHand) {
    return <div>loading..</div>;
  }

  useEffect(() => {
    handleOnClick();
  }, []);

  return (
    <aside className={`pockethands ${className}`}>
      <Card
        value={pocketHand.value}
        suit={pocketHand.suit}
        isActive="true"
        handleOnClick={handleOnClick}
      />
      <Card
        value={pocketHand.value}
        suit={pocketHand.suit}
        isActive="true"
        handleOnClick={handleOnClick}
      />
    </aside>
  );
};

export default PocketHands;
