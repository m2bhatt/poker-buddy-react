import "./Card.scss";
import heartsIcon from "../../assets/icons/hearts.png"
import clubsIcon from "../../assets/icons/clubs.png";
import diamondsIcon from "../../assets/icons/diamonds.png";
import spadesIcon from "../../assets/icons/spades.png";

const suitIcons = {
  "hearts": heartsIcon,
  "clubs": clubsIcon,
  "diamonds": diamondsIcon,
  "spades": spadesIcon
}


const Card = ({ value, suit, handleOnClick, isActive, className }) => {
  const icon = suitIcons[suit?.toLowerCase()];

  return (
    <article className="card" >
      <div className={isActive ? `card__container ${className}` : "card__container card__container--inactive"} onClick={() => handleOnClick({value, suit})}>
        <p className="card__value">{value}</p>
        <img src={icon} alt="" className="card__icon"/>
      </div>
    </article>
  );
};

export default Card;
