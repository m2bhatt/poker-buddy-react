import Card from "../Card/Card";
import "./PokerHand.scss";

const PokerHand = ({ name, cards, chance }) => {
  if (!cards){
    return <div>Loading..</div>
  }

  return (
    <div className="pokerhand">
      <p className="pokerhand__title">{ name }</p>
      <div className="pokerhand__cards">
        {cards.map((card) => (
          <Card key={`${card.value}${card.suit}`} value={card.value} suit={card.suit} isActive={card.isActive}/>
        ))}
      </div>
      <p className="pokerhand__number">{convertToPercentage(chance)}</p>
    </div>
  )

  function convertToPercentage(num) {
    return (num * 100).toFixed(2) + '%';
  }
}

export default PokerHand;
