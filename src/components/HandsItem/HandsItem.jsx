import "./HandsItem.scss";
import Card from "../Card/Card";

const HandsItem = ({ date, playerCards, boardCards, outcome }) => {
  return (
    <tr className="handsitem">
      <td>
        <div className="handsitem__date">{date}</div>
      </td>
      <td>
        <div className="handsitem__cards-container">
          {playerCards.map((card, index) => {
            return (
              <Card
                key={index}
                suit={card.suit}
                value={card.value}
                isActive="true"
              />
            );
          })}
        </div>
      </td>

      <td>
        <div className="handsitem__cards-container">
          {boardCards.map((card, index) => {
            return (
              <Card
                key={index}
                suit={card.suit}
                value={card.value}
                isActive="true"
              />
            );
          })}
        </div>
      </td>
      <td>
        <div className="handsitem__outcome">{outcome}</div>
      </td>
    </tr>
  );
};

export default HandsItem;
