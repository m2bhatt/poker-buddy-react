import Card from "../Card/Card";
import { useEffect, useState } from "react";
import "./Board.scss";

const Board = () => {
  const [activeHandValue, setActiveHandValue] = useState(null);
  const [activeHandSuit, setActiveHandSuit] = useState(null);

  const handleOnClick = () => {
    const card = JSON.parse(localStorage.getItem("card"));
    setActiveHandValue(card.value);
    setActiveHandSuit(card.suit);
  };

  useEffect(() => {
    handleOnClick();
  },[])

  return (
    <main className="board">
      <div onClick={handleOnClick}>
        <Card value={activeHandValue} suit={activeHandSuit} handleOnClick={handleOnClick}/>
        <Card value={activeHandValue} suit={activeHandSuit} handleOnClick={handleOnClick}/>
      </div>
    </main>
  )
};

export default Board;