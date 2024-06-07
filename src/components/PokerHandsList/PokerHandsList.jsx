import pokerHandList from "../../data/pokerHands.json";
import PokerHand from "../PokerHand/PokerHand";
import "./PokerHandsList.scss";

const PokerHandList = ({ yourPokerChances }) => {
  return (
    <div className="pokerhandslist">
      <ul className="pokerhandslist__list">
        <li className="pokerhandslist__item">Poker Hand</li>
        <li className="pokerhandslist__item">You</li>
      </ul>
      <div>
        {pokerHandList.map((pokerHand) => (
          <PokerHand key={pokerHand.name} name={pokerHand.name} cards={pokerHand.cards} chance={yourPokerChances[pokerHand.name]}/>
        ))}
      </div>
    </div>
  )
}

export default PokerHandList;