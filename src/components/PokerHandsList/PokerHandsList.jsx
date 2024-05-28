import pokerHandList from "../../data/pokerHands.json";
import PokerHand from "../PokerHand/PokerHand";
import "./PokerHandsList.scss";

const PokerHandList = () => {
  return (
    <div className="pokerhandslist">
      <div>
        {pokerHandList.map((pokerHand) => (
          <PokerHand key={pokerHand.name} name={pokerHand.name} cards={pokerHand.cards}/>
        ))}
      </div>
    </div>
  )
}

export default PokerHandList;