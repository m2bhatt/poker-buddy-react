import Card from "../Card/Card";
import { useEffect } from "react";
import "./BoardHands.scss";

const BoardHands = ({ pocketHand, setPocketHand, className }) => {
  const handleOnClick = () => {
    console.log("board hand");
  };

  // if (!pocketHand) {
  //   return <div>loading..</div>;
  // }

  // useEffect(() => {
  //   handleOnClick();
  // }, []);

  return (
    <>
      <aside className={`boardhands ${className}`}>
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
        <Card
          value={pocketHand.value}
          suit={pocketHand.suit}
          isActive="true"
          handleOnClick={handleOnClick}
        />
      </aside>
    </>
  );
};

export default BoardHands;
