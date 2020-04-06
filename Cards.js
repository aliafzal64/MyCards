// Author: Ali Afzal
// Last Updated: 2020-04-06
// Cards.js
class Card {
    constructor(frontOfCard, backOfCard) {
        this.frontOfCard = frontOfCard;
        this.backOfCard = backOfCard;
    }

    getFront() {
        return this.frontOfCard;
    }

    setFront(frontOfCard) {
        this.frontOfCard = frontOfCard;
    }

    getBack() {
        return this.backOfCard;
    }

    setBack(backOfCard) {
        this.backOfCard = backOfCard;
    }
}

module.exports = Card;

