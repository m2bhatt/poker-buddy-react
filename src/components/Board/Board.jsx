import "./Board.scss";
import PocketHands from "../PocketHands/PocketHands";
import BoardHands from "../BoardHands/BoardHands";
import Outcome from "../Outcome/Outcome";
import Actions from "../Actions/Actions";

const Board = ({ pocketHand, setPocketHand }) => {
  return (
    <main className="board">
      < BoardHands pocketHand={pocketHand} setPocketHand={setPocketHand} className={`board__board-hands`}/>
      <div className="board__image"></div> 
      < PocketHands pocketHand={pocketHand} setPocketHand={setPocketHand} className={`board__pocket-hands`}/>
      < Outcome className={`board__outcome`}/>
      < Actions className={`board__actions`}/>
    </main>
  )
};

export default Board;