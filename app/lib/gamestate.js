function dieRoll (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

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
  }

  generateCard () {
    this.cards.push({
      title: `Card ${dieRoll(1, 50)}`,
      description: "This is a card."
    });
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
    console.log("Popping!");
    const chosenCard = this.cards[index];
    this.cards.splice(index, 1);
    this.generateCard();
    this.messages.unshift({
      content: `You pick the card: ${chosenCard.title}.`
    });
  }
}
