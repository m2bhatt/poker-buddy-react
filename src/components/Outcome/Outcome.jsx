import { useState } from "react";
import "./Outcome.scss";

const Outcome = ({ className, outcome, setOutcome }) => {

  const handleOnClick = (event) => {
    setOutcome(event.target.textContent);
  }

  return (
    <div className={`outcome ${className}`}>
        <button className="outcome__button" onClick={handleOnClick}>Win</button>
        <button className="outcome__button" onClick={handleOnClick}>Fold</button>
        <button className="outcome__button" onClick={handleOnClick}>Split</button>
    </div>
  );
};

export default Outcome;