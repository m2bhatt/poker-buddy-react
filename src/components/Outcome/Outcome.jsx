import "./Outcome.scss";

const Outcome = ({ className, outcome, setOutcome }) => {

  const handleOnClick = (event) => {
    setOutcome(event.target.textContent);
  }

  return (
    <div className={`outcome ${className}`}>
        <button className={`outcome__button ${outcome === 'Win' ? 'outcome__button--active' : ""}`} onClick={handleOnClick}>Win</button>
        <button className={`outcome__button ${outcome === 'Fold' ? 'outcome__button--active' : ""}`} onClick={handleOnClick}>Fold</button>
        <button className={`outcome__button ${outcome === 'Split' ? 'outcome__button--active' : ""}`} onClick={handleOnClick}>Split</button>
    </div>
  );
};

export default Outcome;