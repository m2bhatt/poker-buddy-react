import PocketHands from "../PocketHands/PocketHands";
import "./Actions.scss";

const Actions = ({ className, setPocketHand, setBoardHand, setActiveCardContainer }) => {

  const handleOnReset = async (event) => {
    event.preventDefault();
    setPocketHand([]);
    setBoardHand([]);
    setActiveCardContainer('pocketHand')
  }

  return (
    <div className={`actions ${className}`}>
      <div>
        <button className="actions__button actions__button--top">Save</button>
      </div>
      <div>
        <button className="actions__button actions__button--bottom" onClick={handleOnReset}>Reset</button>
      </div>
    </div>
  );
};

export default Actions;
