import "./Card.scss";
import heartsIcon from "../../assets/icons/hearts.png"
import clubsIcon from "../../assets/icons/clubs.png";
import diamondsIcon from "../../assets/icons/diamonds.png";
import spadesIcon from "../../assets/icons/spades.png";

const suitIcons = {
  "Hearts": heartsIcon,
  "Clubs": clubsIcon,
  "Diamonds": diamondsIcon,
  "Spades": spadesIcon
}


const Card = ({ value, suit, handleOnClick, isActive }) => {
  const icon = suitIcons[suit];

  return (
    <article className="card" >
      <div className={isActive ? "card__container" : "card__container card__container--inactive"} onClick={() => handleOnClick({value, suit})}>
        <p className="card__value">{value}</p>
        <img src={icon} alt="" className="card__icon"/>
      </div>
    </article>
  );
};

export default Card;
