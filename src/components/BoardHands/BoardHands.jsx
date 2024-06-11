import "./BoardHands.scss";
import Card from "../Card/Card";


const BoardHands = ({ boardHand, className }) => {
  if (!boardHand) {
    return <div>loading..</div>;
  }

  return (
    <>
      <aside className={`boardhands ${className}`}>
        {[...boardHand, {}, {}, {}, {}, {}].slice(0, 5).map((card, index) => (
          <Card
            key={`empty_${index}`}
            value={card.value}
            suit={card.suit}
            isActive="true"
          />
        ))}
      </aside>
    </>
  );
};

export default BoardHands;
