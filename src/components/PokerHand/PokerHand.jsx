import Card from "../Card/Card";
import "./PokerHand.scss";

const PokerHand = ({ name, cards }) => {

  if (!cards){
    return <div>Loading..</div>
  }

  return (
    <div className="pokerhand">
      <p className="pokerhand__title">{ name }</p>
      <div className="pokerhand__cards">
        {cards.map((card) => (
          <Card key={`${card.value}${card.suit}`} value={card.value} suit={card.suit} />
        ))}
      </div>
      <ul className="pokerhand__probability-list">
        <li className="pokerhand__probability-item">44%</li>
        <li className="pokerhand__probability-item">44%</li>
      </ul>
    </div>
  )
}

export default PokerHand;
