import Card from "../Card/Card";
import Probability from "../Probability/Probability";
import "./PokerHand.scss";

const PokerHand = ({ name, cards, pocketHand, boardHand }) => {

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
      <ul className="pokerhand__probability-list">
        <Probability pocketHand={pocketHand} boardHand={boardHand} /> 
      </ul>
    </div>
  )
}

export default PokerHand;
