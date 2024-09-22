let numOne = document.querySelector(".card1-num1");
let numtwo = document.querySelector(".card1-mainNum");
let numthree = document.querySelector(".card1-num3");
let card2numOne = document.querySelector(".card2-num1");
let card2numtwo = document.querySelector(".card2-mainNum");
let card2numthree = document.querySelector(".card2-num3");
let message = document.querySelector(".message");
let isALive = true;
let hasBlackjack = false;
let cards = [];
let sum = 0;
let sumEl = document.querySelector(".sum");

let extraCards = document.querySelector(".cards");

function startGame() {
  let card1 = Math.floor(Math.random() * 9) + 1;
  let card2 = Math.floor(Math.random() * 9) + 1;

  sum = card1 + card2;
  isALive = true;
  hasBlackjack = false;
  console.log(sum);
  numOne.innerHTML = card1;
  numtwo.innerHTML = card1;
  numthree.innerHTML = card1;
  card2numOne.innerHTML = card2;
  card2numtwo.innerHTML = card2;
  card2numthree.innerHTML = card2;
  sumEl.innerHTML = `SUM: ${sum}`;

  let elements = document.querySelectorAll(".card3");
  elements.forEach((element) => {
    element.remove();
  });

  renderGame();
}

function renderGame() {
  if (sum < 21) {
    message.innerHTML = "Do you want to draw another Card?";
    hasBlackjack = false;
    isALive = true;
  } else if (sum === 21) {
    message.innerHTML = "You've won";
    hasBlackjack = true;
    isALive = true;
  } else {
    message.innerHTML = "You've lost";
    isALive = false;
    hasBlackjack = false;
  }
}

function newCard() {
  if (isALive && !hasBlackjack) {
    let newCard = Math.floor(Math.random() * 9) + 1;
    cards.push(newCard);
    sum += newCard;
    console.log(newCard);
    sumEl.innerHTML = `Sum: ${sum}`;
    const ca = document.createElement("div");
    ca.classList.add("cardStyle");
    ca.classList.add("card3");
    ca.innerHTML = `
      <div class='card2-num1'>${newCard}</div>
      <div class='card2-mainNum'>${newCard}</div>
      <div class='card2-num3'>${newCard}</div>`;

    // Append the card to the extra-cards container
    extraCards.appendChild(ca);

    renderGame();
  }
}
