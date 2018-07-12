/* memory game JS code */
/* Cards in Play */
var cardsInPlay = [];
/* "Deck" of Cards */
var cards = [
  {
  rank: "queen",
  suit: "hearts",
  cardImage: "images/queen-of-hearts.png"
},
  {rank: "queen",
  suit: "diamonds",
  cardImage: "images/queen-of-diamonds.png"
},
  {rank: "king",
  suit: "hearts",
  cardImage: "images/king-of-hearts.png"
},
  {rank: "king",
  suit: "diamonds",
  cardImage: "images/king-of-diamonds.png"}
];

/* Flip a Card*/
var flipCard = function(cardId) {
cardsInPlay.push(cards[cardId].rank);
console.log("User flipped " + cards[cardId].rank);
console.log(cards[cardId].cardImage);
console.log(cards[cardId].suit);
}
flipCard(0);
flipCard(2);

/* Check for Match */
var checkForMatch = function() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    console.log("You found a match!");
  }
  else {
    console.log("Sorry, please try again.");
  }
};

checkForMatch()
