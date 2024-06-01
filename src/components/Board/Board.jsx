import "./Board.scss";
import PocketHands from "../PocketHands/PocketHands";
import BoardHands from "../BoardHands/BoardHands";
import Outcome from "../Outcome/Outcome";
import Actions from "../Actions/Actions";

const Board = ({ pocketHand, setPocketHand, boardHand, setBoardHand, setActiveCardContainer }) => {
  return (
    <main className="board">
      <div className="board__image"> 
      < BoardHands boardHand={boardHand} className={`board__board-hands`}/>
      < PocketHands pocketHand={pocketHand} setPocketHand={setPocketHand} className={`board__pocket-hands`}/>
      </div>
      < Outcome className={`board__outcome`}/>
      < Actions className={`board__actions`} setPocketHand={setPocketHand} setBoardHand={setBoardHand} setActiveCardContainer={setActiveCardContainer} />
    </main>
  )
};

export default Board;