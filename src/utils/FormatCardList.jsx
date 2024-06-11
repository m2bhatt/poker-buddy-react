const formatCardList = (cards) => {
  const suitMap = {
    hearts: "h",
    diamonds: "d",
    clubs: "c",
    spades: "s",
  };

  return cards.map((card) => {
    const value = card.value === "10" ? "T" : card.value;
    return `${value}${suitMap[card.suit.toLowerCase()]}`;
  });
};

export default formatCardList;
