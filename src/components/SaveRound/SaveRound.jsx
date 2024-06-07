import "./SaveRound.scss";
import axios from "axios";
import { SnackbarProvider, enqueueSnackbar } from "notistack";

const API_URL = import.meta.env.VITE_LOCALHOST;

const handOutcome = {
  Fold: 0,
  Win: 1,
  Split: 2,
};

const SaveRound = ({ className, pocketHand, boardHand, token, outcome }) => {
  async function postHand() {
    const boardHandToPost = boardHand.slice(0, 5);

    try {
      const handData = {
        player_cards: { cards: pocketHand },
        table_cards: { cards: boardHandToPost },
        outcome: handOutcome[outcome],
        hand_name: 1,
      };
      const postHandRequest = await axios.post(`${API_URL}/hands`, handData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error("Error while posting hand", error);
    }
  }

  const handleOnClick = async (event) => {
    event.preventDefault();
    postHand();
    enqueueSnackbar("Hand saved successfully!");
    //set board cards and pocket cards to initial state TODO
  };

  return (
    <div className={`saveround ${className}`}>
      <SnackbarProvider className="saveround__snackbar"/>
      <button className="saveround__button" onClick={handleOnClick}>
        Save
      </button>
    </div>
  );
};

export default SaveRound;
