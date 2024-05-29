import Card from "../Card/Card";
import { useEffect, useState } from "react";
import "./Board.scss";

const Board = ({ card, setCard, pocketHand, setPocketHand }) => {

  const handleOnClick = () => {
    const localCard = JSON.parse(localStorage.getItem("card"));
    setPocketHand({value: localCard.value, suit: localCard.suit})
  };

  if(!pocketHand) {
    return <div>loading..</div>
  }

  useEffect(() => {
    handleOnClick();
  },[])

  return (
    <main className="board">
      <div onClick={handleOnClick}>
        <Card value={pocketHand.value} suit={pocketHand.suit} handleOnClick={handleOnClick}/>
        <Card value={card.value} suit={card.suit} handleOnClick={handleOnClick}/>
        {/* <Card value={activeHandValue} suit={activeHandSuit} handleOnClick={handleOnClick}/> */}
      </div>
    </main>
  )
};

export default Board;