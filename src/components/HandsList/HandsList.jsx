import axios from "axios";
import { useEffect, useState } from "react";
import "./HandsList.scss";
import HandsItem from "../HandsItem/HandsItem";

const API_URL = import.meta.env.VITE_LOCALHOST;

const handOutcome = {
  0: 'Lose',
  1: 'Win',
  2: 'Split'
}

const HandsList = ({ token }) => {
  const [handsData, setHandsData] = useState([]);

  async function getHands() {
    try {
      const response = await axios.get(`${API_URL}/hands`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const handsData = response.data.map((hand) => ({
        date: new Date(hand.created_at).toLocaleDateString('en-US'),
        playerCards: hand.player_cards.cards,
        boardCards: hand.table_cards.cards,
        outcome: handOutcome[hand.outcome]
      }));
      setHandsData(handsData);
    } catch (error) {
      console.error("Error while getting hand", error);
    }
  }

  useEffect(() => {
    getHands();
  }, []);

  if (handsData.length === 0) {
    return <div className="loader">No hands saved yet.</div>;
  }

  return (
    <table className="handslist">
      <thead className="handslist__header">
        <tr>
          <th scope="col" className="handslist__header-item">Date</th>
          <th scope="col" className="handslist__header-item">Pocket Cards</th>
          <th scope="col" className="handslist__header-item">Board Cards</th>
          <th scope="col" className="handslist__header-item">Outcome</th>
        </tr>
      </thead>
      <tbody>
        {handsData.map((hand, index) => (
          <HandsItem
            key={index}
            date={hand.date}
            playerCards={hand.playerCards}
            boardCards={hand.boardCards}
            outcome={hand.outcome}
          />
        ))}
      </tbody>
    </table>
  );
};

export default HandsList;
