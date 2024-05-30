import DeckColumn from "../DeckColumn/DeckColumn";
import "./Deck.scss";

const Deck = ({ deck, pocketHand, setPocketHand }) => {
  return (
    <aside className="deck">
      <DeckColumn deck={deck} suit={"Hearts"} pocketHand={pocketHand} setPocketHand={setPocketHand}/>
      <DeckColumn deck={deck} suit={"Diamonds"} pocketHand={pocketHand} setPocketHand={setPocketHand} />
      <DeckColumn deck={deck} suit={"Spades"} pocketHand={pocketHand} setPocketHand={setPocketHand} />
      <DeckColumn deck={deck} suit={"Clubs"} pocketHand={pocketHand} setPocketHand={setPocketHand} />
    </aside>
  );
};

export default Deck;
