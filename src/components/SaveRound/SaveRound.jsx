import axios from "axios";
import { useSnackbar } from "notistack";
import "./SaveRound.scss";

const API_URL = import.meta.env.VITE_LOCALHOST;

const handOutcome = {
  Fold: 0,
  Win: 1,
  Split: 2,
};

const SaveRound = ({
  className,
  pocketHand,
  setPocketHand,
  boardHand,
  setBoardHand,
  token,
  outcome,
  setOutcome,
  setActiveCardContainer,
  createDeck,
  setDeck,
  setProbabilityData,
}) => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  async function postHand() {
    try {
      const handData = {
        player_cards: { cards: pocketHand },
        table_cards: { cards: boardHand },
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

  const resetHand = () => {
    setPocketHand([]);
    setBoardHand([]);
    setOutcome("");
    setActiveCardContainer("pocketHand");
    setDeck(createDeck());
    setProbabilityData();
  };

  const handleOnClick = async (event) => {
    event.preventDefault();
    closeSnackbar();
    if (!token) {
      enqueueSnackbar("Please login to save hand.", {
        autoHideDuration: 20000,
        preventDuplicate: true,
        variant: "error",
      });
    } else if (pocketHand.length < 2) {
      enqueueSnackbar("Add your pocket cards before saving hand.", {
        autoHideDuration: 20000,
        preventDuplicate: true,
        variant: "error",
      });
    } else if (!outcome) {
      enqueueSnackbar("Add outcome in order to save hand!", {
        autoHideDuration: 20000,
        preventDuplicate: true,
        variant: "error",
      });
    } else {
      await postHand();
      enqueueSnackbar("Hand saved successfully!", {
        autoHideDuration: 20000,
        preventDuplicate: true,
        variant: "success",
      });
      resetHand();
    }
  };

  return (
    <div className={`saveround ${className}`}>
      <button className="saveround__button" onClick={handleOnClick}>
        SAVE
      </button>
    </div>
  );
};

export default SaveRound;
