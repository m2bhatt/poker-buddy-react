import "./Board.scss";
import PocketHands from "../PocketHands/PocketHands";
import BoardHands from "../BoardHands/BoardHands";
import Outcome from "../Outcome/Outcome";
import Reset from "../Reset/Reset";
import SaveRound from "../SaveRound/SaveRound";

const Board = ({
  pocketHand,
  setPocketHand,
  boardHand,
  setBoardHand,
  setActiveCardContainer,
  token
}) => {
  return (
    <main className="board">
      <div className="board__image">
        <BoardHands boardHand={boardHand} className={`board__board-hands`} />
        <PocketHands
          pocketHand={pocketHand}
          setPocketHand={setPocketHand}
          className={`board__pocket-hands`}
        />
      </div>
      <Outcome className={`board__outcome`} />
      <SaveRound className={`board__saveround`} pocketHand={pocketHand} boardHand={boardHand} token={token} />
      <Reset
        className={`board__reset`}
        setPocketHand={setPocketHand}
        setBoardHand={setBoardHand}
        setActiveCardContainer={setActiveCardContainer}
      />

    </main>
  );
};

export default Board;
