import pokerHandList from "../../data/pokerHands.json";
import PokerHand from "../PokerHand/PokerHand";
import "./PokerHandsList.scss";

const PokerHandList = ({ yourHandChances, oppHandChances }) => {
  return (
    <div className="pokerhandslist">
      <ul className="pokerhandslist__list">
        <li className="pokerhandslist__item">Poker Hand</li>
        <ul className="pokerhandslist__list-right">
          <li className="pokerhandslist__item">You</li>
          <li className="pokerhandslist__item">Other</li>
        </ul>
      </ul>
      <div>
        {pokerHandList.map((pokerHand) => (
          <PokerHand
            key={pokerHand.name}
            name={pokerHand.name}
            cards={pokerHand.cards}
            yourHandChances={yourHandChances[pokerHand.name]}
            oppHandChances={oppHandChances[pokerHand.name]}
          />
        ))}
      </div>
    </div>
  );
};

export default PokerHandList;
