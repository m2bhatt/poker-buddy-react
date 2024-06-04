import "./SaveRound.scss";
import axios from "axios";

const API_URL = import.meta.env.VITE_LOCALHOST;

const handOutcome = {
  'Lose': 0,
  'Win': 1,
  'Split': 2
}

const SaveRound = ({ className, pocketHand, boardHand, token, outcome }) => {

  //TODO- remove hardcoding of hand_name 

  async function postHand() {
    const boardHandToPost = boardHand.slice(0, 5);

    try {
      const handData = {
        player_cards: {"cards" : pocketHand},
        table_cards: {"cards" : boardHandToPost},
        outcome: handOutcome[outcome],
        hand_name: 1
      };
      const postHandRequest = await axios.post(`${API_URL}/hands`, handData, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
    } catch (error) {
      console.error("Error while posting hand", error);
    }
  };

  const handleOnClick = async (event) => {
    event.preventDefault();
    postHand();
    //set board cards and pocket cards to initial state TODO
  }

  return (
    <div className={`saveround ${className}`}>
        <button className="saveround__button" onClick={handleOnClick}>Save</button>
    </div>
  );
};

export default SaveRound;
