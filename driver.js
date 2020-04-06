// Author: Ali Afzal
// Last Updated: 2020-04-06
// driver.js
const Card = require('./Cards')
const Deck = require('./Deck')

// create cards
let firstCard = new Card("whats my name", "ali");
let secondCard = new Card("whats my age", "20");

// create deck
let myDeck = new Deck("Alis Card Deck");

// put card into deck
myDeck.addCardToDeck(firstCard);
myDeck.addCardToDeck(secondCard)

// test getAmountOfCards function
console.log("Amount of Cards in the Deck: " + myDeck.getAmountOfCards());

cards = myDeck.getAllCards();

// print all cards
for (let index in cards) {
    console.log(cards[index])
}


