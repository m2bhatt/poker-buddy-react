import "./Outcome.scss";

const Outcome = ({ className }) => {
  return (
    <div className={`outcome ${className}`}>
        <button className="outcome__button">Win</button>
        <button className="outcome__button">Fold</button>
    </div>
  );
};

export default Outcome;