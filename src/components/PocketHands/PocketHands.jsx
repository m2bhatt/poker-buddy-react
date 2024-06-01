import Card from "../Card/Card";
import { useEffect } from "react";
import "./PocketHands.scss";

const PocketHands = ({ pocketHand, className }) => {
  // const handleOnClick = () => {
  //   setPocketHand(pocketHand);
  //   console.log(pocketHand);
  // };

  console.log(pocketHand);

  if (!pocketHand) {
    return <div>loading..</div>;
  }

  console.log(pocketHand);

  return (
    <aside className={`pockethands ${className}`}>
      <Card
        value={pocketHand[0] ? pocketHand[0].value : ""}
        suit={pocketHand[0] ? pocketHand[0].suit : ""}
        isActive="true"
        // handleOnClick={handleOnClick}
      />
      <Card
        value={pocketHand[1] ? pocketHand[1].value : ""}
        suit={pocketHand[1] ? pocketHand[1].suit : ""}
        isActive="true"
        // handleOnClick={handleOnClick}
      />
    </aside>
  );
};

export default PocketHands;
