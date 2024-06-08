import "./Reset.scss";

const Reset = ({ className, setPocketHand, setBoardHand, setActiveCardContainer, setOutcome, createDeck, setDeck, setProbabilityData }) => {

  const handleOnReset = async (event) => {
    event.preventDefault();
    setPocketHand([]);
    setBoardHand([]);
    setOutcome("");
    setActiveCardContainer('pocketHand');
    setDeck(createDeck());
    setProbabilityData();
  }

  return (
    <div className={`reset ${className}`}>
        <button className="reset__button" onClick={handleOnReset}>RESET</button>
    </div>
  );
};

export default Reset;

//TODO - Reset outcomes, probability
