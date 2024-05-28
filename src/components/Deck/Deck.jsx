import DeckColumn from "../DeckColumn/DeckColumn";
import "./Deck.scss";

const Deck = ({ deck }) => {
  return (
    <aside className="deck">
      <DeckColumn deck={deck} suit={"Hearts"} />
      <DeckColumn deck={deck} suit={"Diamonds"} />
      <DeckColumn deck={deck} suit={"Spades"} />
      <DeckColumn deck={deck} suit={"Clubs"} />
    </aside>
  );
};

export default Deck;
