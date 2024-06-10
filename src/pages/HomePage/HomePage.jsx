import Probability from "../../components/Probability/Probability";
import Board from "../../components/Board/Board";
import Deck from "../../components/Deck/Deck";
import { useEffect, useState } from "react";
import "./HomePage.scss";
import { SnackbarProvider } from "notistack";

const HomePage = ({ token }) => {
  const [deck, setDeck] = useState();
  const [pocketHand, setPocketHand] = useState([]);
  const [boardHand, setBoardHand] = useState([]);
  const [activeCardContainer, setActiveCardContainer] = useState("pocketHand");
  const [probabilityData, setProbabilityData] = useState();

  useEffect(() => {
    setDeck(createDeck());
  }, []);

  if (!deck) {
    return <div>loading...</div>;
  }

  return (
    <>
      <SnackbarProvider className="saveround__snackbar" iconVariant={{
    success: '♥️ ',
    error: '🃏 '
  }}>
        <div className="trainer">
          <Probability className={`trainer__probability`}
            pocketHand={pocketHand}
            boardHand={boardHand}
            probabilityData={probabilityData}
            setProbabilityData={setProbabilityData}
          />
          <Board className={`trainer__board`}
            pocketHand={pocketHand}
            setPocketHand={setPocketHand}
            boardHand={boardHand}
            setBoardHand={setBoardHand}
            setActiveCardContainer={setActiveCardContainer}
            token={token}
            createDeck={createDeck}
            setDeck={setDeck}
            setProbabilityData={setProbabilityData}
          />
          <Deck className={`trainer__deck`}
            deck={deck}
            setDeck={setDeck}
            pocketHand={pocketHand}
            setPocketHand={setPocketHand}
            boardHand={boardHand}
            setBoardHand={setBoardHand}
            activeCardContainer={activeCardContainer}
            setActiveCardContainer={setActiveCardContainer}
          />
        </div>
      </SnackbarProvider>
    </>
  );
};

export const createDeck = () => {
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];

  let deck = [];
  for (let suit of suits) {
    for (let value of values) {
      deck.push({ suit, value, isActive: true });
    }
  }
  return deck;
};

export default HomePage;
