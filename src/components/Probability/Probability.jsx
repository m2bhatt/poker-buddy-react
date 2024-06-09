import { TexasHoldem } from "unknown-poker";
import formatCardList from "../../utils/FormatCardList";
import { useEffect } from "react";
import PokerHandsList from "../PokerHandsList/PokerHandsList";
import "./Probability.scss";

const Probability = ({ pocketHand, boardHand, probabilityData, setProbabilityData, className }) => {
  
  function calculateProbability() {
    setProbabilityData(null);

    const table = new TexasHoldem();
    table.setTable(formatCardList(boardHand));
    table.setPlayer(formatCardList(pocketHand));
    table.addOpponent([]);

    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(table.calculate());
      }, 2000);
    });
  }

  useEffect(() => {
    if (pocketHand.length < 2) return

    async function getData() {
      const result = await calculateProbability();
      setProbabilityData(result);
    }

    getData();
  }, [pocketHand,boardHand]) 
 
  const initialPokerChances = { "Straight Flush": 0, "Four of a Kind" :0, "Full House": 0, 'Flush': 0, 'Straight': 0, "Three of a Kind": 0, "Two Pair": 0,  "Pair": 0, "High Card": 0 }
  const yourHandChances = Object.assign(initialPokerChances, probabilityData?.yourHandChances);

  const initialOppHandChances = { "Straight Flush": 0, "Four of a Kind" :0, "Full House": 0, 'Flush': 0, 'Straight': 0, "Three of a Kind": 0, "Two Pair": 0,  "Pair": 0, "High Card": 0 }
  const oppHandChances = Object.assign(initialOppHandChances, probabilityData?.oppHandChances);

  return (
    <>
    <div className={`probability ${className}`}>
      <PokerHandsList yourHandChances={yourHandChances} oppHandChances={oppHandChances} />
    </div>
    </>
  )
};

export default Probability;