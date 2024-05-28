import Board from "../../components/Board/Board";
import Deck from "../../components/Deck/Deck";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [deck, setDeck] = useState();

  useEffect(() => {
    setDeck(createDeck());
  }, [])

  if (!deck) {
    return <div>Loading....in home page</div>
  }

  return (
    <>
    <h1>This is the Home Page! </h1>
    <Deck deck={deck}/>
    <Board />
    </>
  )
}

const createDeck = () => {
  const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

  let deck = [];
  for (let suit of suits) {
    for (let value of values) {
      deck.push({ suit, value });
    }
  }
  return deck;
}

export default HomePage;