import pokerHandList from "../../data/pokerHands.json";
import PokerHand from "../PokerHand/PokerHand";
// import ProbabilityList from "../ProbabilityList/ProbabilityList";
import "./PokerHandsList.scss";

const PokerHandList = ({ pocketHand, boardHand }) => {
  return (
    <div className="pokerhandslist">
      <div>
        {pokerHandList.map((pokerHand) => (
          <PokerHand key={pokerHand.name} name={pokerHand.name} cards={pokerHand.cards} pocketHand={pocketHand} boardHand={boardHand} />
        ))}
      </div>
    </div>
  )
}

export default PokerHandList;