const cardsArray = [
  {
    name: "HTML",
    image: "images/html.png",
  },
  {
    name: "CSS",
    image: "images/css.png",
  },
  {
    name: "JS",
    image: "images/js.png",
  },
  {
    name: "Node",
    image: "images/node.png",
  },
  {
    name: "React",
    image: "images/React.png",
  },
  {
    name: "MongoDB",
    image: "images/mongoDB.png",
  },
];

const parentDiv = document.querySelector("#card_section");

// duplicate cards
const cards = cardsArray.concat(cardsArray);

// shuffle
let shuffledChild = Array.from(cards).sort(() => 0.5 - Math.random());

// card match styling js code
const cardMatch = () => {
  let card_match = document.querySelectorAll(".card-selected");
  card_match.forEach((curElem) => {
    curElem.classList.add("card_match");
  });
};

// card click functionality
let clickCount = 0;
let firstCard = "";
let secondCard = "";

// rest click count
const restClickCount = () => {
  clickCount = 0;
  firstCard = "";
  secondCard = "";
  let card_selected = document.querySelectorAll(".card-selected");
  card_selected.forEach((curElem) => {
    curElem.classList.remove("card-selected");
  });
};

parentDiv.addEventListener("click", (event) => {
  let curCard = event.target;
  clickCount++;
  if (curCard.id === "card_section") {
    curCard.classList.remove("card-selected");
  } else if (clickCount < 3) {
    if (clickCount === 1) {
      firstCard = curCard.parentNode.dataset.name;
      curCard.parentNode.classList.add("card-selected");
    }
    if (clickCount === 2) {
      secondCard = curCard.parentNode.dataset.name;
      curCard.parentNode.classList.add("card-selected");
    }
    if (firstCard !== "" && secondCard !== "") {
      if (firstCard === secondCard) {
        setTimeout(() => {
          cardMatch();
          restClickCount();
        }, 1000);
      } else {
        setTimeout(() => {
          restClickCount();
        }, 1000);
      }
    }
  }
});

for (let i = 0; i < shuffledChild.length; i++) {
  const childDiv = document.createElement("div");
  childDiv.classList.add("card");
  childDiv.dataset.name = shuffledChild[i].name;
  // childDiv.innerText = shuffledChild[i].name;

  const frontDiv = document.createElement("div");
  frontDiv.classList.add("front-card");

  const backDiv = document.createElement("div");
  backDiv.classList.add("back-card");
  // backDiv.innerText = shuffledChild[i].name;
  backDiv.style.background = `url(${shuffledChild[i].image})`;
  backDiv.style.backgroundSize = "contain";
  backDiv.style.backgroundPosition = "center center";
  backDiv.style.backgroundRepeat = "no-repeat";

  parentDiv.appendChild(childDiv);
  childDiv.appendChild(frontDiv);
  childDiv.appendChild(backDiv);
}
