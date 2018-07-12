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

/* Creates Game Board */
var createBoard = function () {
  for (var i = 0; i < cards.length; i++) {
    var cardElement = document.createElement('img');
    cardElement.setAttribute('src', 'images/back.png');
    cardElement.setAttribute('data-id', i);
    cardElement.addEventListener('click', flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}

/* Check for Match
How do I get this to run before the page reloads? */
var checkForMatch = function () {
    if ( cardsInPlay[0] === cardsInPlay[1]) {
      alert("Congratulations! You found a match :)");
      }
    else {
      alert("Good try, but please try again.");
    };
  };

/* Flip a Card*/
var flipCard = function () {
var cardId = this.getAttribute('data-id');
cardsInPlay.push(cards[cardId].rank);
console.log("User flipped " + cards[cardId].rank);
var cardElement = this.setAttribute('src', cards[cardId].cardImage);
  if (cardsInPlay.length == 2) {
checkForMatch()
}
}

createBoard()

/* Reset Button */
