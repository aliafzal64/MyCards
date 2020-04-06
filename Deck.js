// Author: Ali Afzal
// Last Updated: 2020-04-06
// Deck.js
class Deck {
    constructor(name) {
        this.name = name;
        this.amountOfCards = 0;
        this.deckOfCards = [];
    }

    addCardToDeck(card) {
        this.deckOfCards.push(card);
        this.amountOfCards++;
    }

    removeCardFromDeck(index) {
        this.deckOfCards.splice(index);
        this.amountOfCards--;
    }

    getAmountOfCards() {
        return this.amountOfCards;
    }

    getDeckName() {
        return this.name;
    }

    setDeckName(name) {
        this.name = name;
    }

    getAllCards() {
        return this.deckOfCards;
    }
}

module.exports = Deck;
