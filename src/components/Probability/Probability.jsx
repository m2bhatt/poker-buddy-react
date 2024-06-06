import { TexasHoldem } from "unknown-poker";
import formatCardList from "../../utils/FormatCardList";
import { useEffect, useState } from "react";
import PokerHand from "../PokerHand/PokerHand";

const Probability = ({ pocketHand, boardHand }) => {
  const [probabilityData, setProbabilityData] = useState();

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

    // return table.calculate();
  }

  useEffect(() => {
    if (pocketHand.length < 2) return

    async function getData() {
      const result = await calculateProbability();
      setProbabilityData(result);
    }

    getData();
  }, [pocketHand,boardHand]) 

  if(!probabilityData) {
    return <div>loading..</div>
  }

  const { yourHandChances } = probabilityData;

  return (
    <>
      <div>
      {Object.entries(yourHandChances).map(([key, value]) => (
        <div key={key}>
          {key}: {value}
        </div>
      ))}
    </div>
    <div>
      < PokerHand />
    </div>
    </>
  
  )

};

export default Probability;