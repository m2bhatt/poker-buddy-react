import "./Card.scss";
import heartsIcon from "../../assets/icons/hearts.png";
import clubsIcon from "../../assets/icons/clubs.png";
import diamondsIcon from "../../assets/icons/diamonds.png";
import spadesIcon from "../../assets/icons/spades.png";

const suitIcons = {
  hearts: heartsIcon,
  clubs: clubsIcon,
  diamonds: diamondsIcon,
  spades: spadesIcon,
};

const Card = ({ value, suit, handleOnClick, isActive, className }) => {
  const icon = suitIcons[suit?.toLowerCase()];
  const isEmpty = !value && !suit;

  return (
    <article className="card">
      <div
        className={
          isActive
            ? `card__container ${className} ${
                isEmpty ? "card__container--empty" : ""
              }`
            : `card__container card__container--inactive ${
                isEmpty ? "card__container--empty" : ""
              }`
        }
        onClick={isActive ? () => handleOnClick({ value, suit }) : null}
      >
        <p className="card__value">{value}</p>
        <img src={icon} alt="" className="card__icon" />
      </div>
    </article>
  );
};

export default Card;
