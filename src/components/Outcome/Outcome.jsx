import "./Outcome.scss";

const Outcome = ({ className }) => {
  return (
    <div className={`outcome ${className}`}>
      <h3 className="outcome__title">Outcome</h3>
      <ul className="outcome__list">
        <button className="outcome__button">Win</button>
        <button className="outcome__button">Fold</button>
      </ul>
    </div>
  );
};

export default Outcome;
