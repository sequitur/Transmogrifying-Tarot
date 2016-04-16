import {dieRoll} from './util.js';
import TarotCard from './TarotCard.js';
import Character from './Character.js';

export default class GameState {
  constructor () {
    this.cards = [];
    this.challenges = [];
    this.challengeCount = 0;
    this.messages = [{
      content: "Your journey begins..."
    }];
    for (let i = 0; i < 7; i++) this.generateCard();
    for (let i = 0; i < 4; i++) this.generateChallenge();
    this.character = new Character();
  }

  generateCard () {
    this.cards.push(new TarotCard);
  }

  generateChallenge () {
    this.challengeCount++;
    this.challenges.push({
      title: `Challenge ${this.challengeCount}`,
      description: "This is a challenge"
    });
  }

  attemptChallenge () {
    this.messages.unshift({
      content: "You attempt a challenge..."
    });
    this.challenges.shift();
    this.generateChallenge();
  }

  popCard (index) {
    const chosenCard = this.cards[index];
    const output = this.character.perform(chosenCard);
    this.cards.splice(index, 1);
    this.generateCard();
    this.messages.unshift({
      content: output.message
    });
    if (output.effect) this[output.effect]();
  }

  wheel () {
    // Wheel of fortune
    for (let i = 0; i < 5; i++) {
      this.generateCard();
      this.cards.shift();
    }
    console.log(this.cards);
  }

  get desc () {
    return this.character.description;
  }
}
