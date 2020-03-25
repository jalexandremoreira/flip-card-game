const cards = [
  {
    id: "f0001",
    name: "1",
    img: "/imgs/cardCircle.png",
    isFlipped: false,
    disabled: false
  },
  {
    id: "f0002",
    name: "2",
    img: "/imgs/cardDashLeft.png",
    isFlipped: false,
    disabled: false
  },
  {
    id: "f0003",
    name: "3",
    img: "/imgs/cardDashRight.png",
    isFlipped: false,
    disabled: false
  },
  {
    id: "f0004",
    name: "4",
    img: "/imgs/cardPlus.png",
    isFlipped: false,
    disabled: false
  },
  {
    id: "f0005",
    name: "5",
    img: "/imgs/cardTilda.png",
    isFlipped: false,
    disabled: false
  },
  {
    id: "f0006",
    name: "6",
    img: "/imgs/cardX.png",
    isFlipped: false,
    disabled: false
  },
  {
    id: "f0007",
    name: "1",
    img: "/imgs/cardCircle.png",
    isFlipped: false,
    disabled: false
  },
  {
    id: "f0008",
    name: "2",
    img: "/imgs/cardDashLeft.png",
    isFlipped: false,
    disabled: false
  },
  {
    id: "f0009",
    name: "3",
    img: "/imgs/cardDashRight.png",
    isFlipped: false,
    disabled: false
  },
  {
    id: "f0010",
    name: "4",
    img: "/imgs/cardPlus.png",
    isFlipped: false,
    disabled: false
  },
  {
    id: "f0011",
    name: "5",
    img: "/imgs/cardTilda.png",
    isFlipped: false,
    disabled: false
  },
  {
    id: "f0012",
    name: "6",
    img: "/imgs/cardX.png",
    isFlipped: false,
    disabled: false
  }
];

export const getCards = () => {
  const newCards = JSON.parse(JSON.stringify(cards));
  return shuffle(newCards);
};

function shuffle(array) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
