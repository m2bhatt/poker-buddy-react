import "./Reset.scss";

const Reset = ({ className, setPocketHand, setBoardHand, setActiveCardContainer }) => {

  const handleOnReset = async (event) => {
    event.preventDefault();
    setPocketHand([]);
    setBoardHand([]);
    setActiveCardContainer('pocketHand')
  }

  const handleOnSave = async (event) => {
    event.preventDefault();
    console.log("clicked save")
  }

  return (
    <div className={`reset ${className}`}>
        <button className="reset__button" onClick={handleOnReset}>Reset</button>
    </div>
  );
};

export default Reset;
