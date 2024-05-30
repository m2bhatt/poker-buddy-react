import "./Board.scss";
import PocketHands from "../PocketHands/PocketHands";
import BoardHands from "../BoardHands/BoardHands";

const Board = ({ pocketHand, setPocketHand }) => {
  return (
    <main className="board">
      < BoardHands pocketHand={pocketHand} setPocketHand={setPocketHand} className={`board__board-hands`}/>
      <div className="board__image"></div> 
      < PocketHands pocketHand={pocketHand} setPocketHand={setPocketHand} className={`board__pocket-hands`}/>
    </main>
  )
};

export default Board;