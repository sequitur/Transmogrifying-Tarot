import { dieRoll } from './util.js';

/******
  The Transmogrifying Tarot is a complete tarot with 71 cards, comprising...
  - Five suits of minor arcana: Wings, Claws, Fangs, Eyes, Tongues
    - Seven numbered cards per suit;
    - Three face cards: A King, a Queen, and a card of varying name
  - Twenty numbered Major Arcana;
    - I - The Compound Eye
    - II - The Proboscis
    - III - The Talon
    - IV - The Hooked Beak
    - V - The Oculus
    - VI - The Tentacle
    - VII - The Hooves
    - VIII - The Mane
    - IX - The Batwing
    - X - The Wheel
    - XI - The Molt
    - XII - The Lash
    - XIII - The Card with no Name
    - XIV - The Grin
    - XV - The Maw
    - XVI - The Spine
    - XVII - The Angler
    - XVIII - The Wolf
    - XIX - The Dragon
    - XX - The Face
  - The card with no number, the Protoplasm;

  Internally, we represent those cards as the numbers 0 through 70, where 0 is
  the Ace of Wings and 71 is the Protoplasm.
******/

const MINOR_NAMES = [
  'Ace',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Page',
  'Queen',
  'King'
];

const MAJOR_ARCANA = [
  'Compound Eye',
  'Proboscis',
  'Talon',
  'Hooked Beak',
  'Oculus',
  'Tentacle',
  'Hooves',
  'Mane',
  'Batwing',
  'Wheel',
  'Molt',
  'Lash',
  'UNNAMED',
  'Grin',
  'Maw',
  'Spine',
  'Angler',
  'Wolf',
  'Dragon',
  'Face',
  'Protoplasm'
]

function roman (n) {
  if (n === 9) return 'IX';
  if (n === 19) return 'XIX';
  const tens = Math.floor(n / 10);
  const remainder = n % 10;
  const is = ['', 'I', 'II', 'III', 'IV'];
  const xs = ['', 'X', 'XX'];
  let five = false;
  if (remainder > 4) five = true;
  if (five) {
    let extra = remainder - 5;
    return `${xs[tens]}V${is[extra]}`;
  }
  return `${xs[tens]}${is[remainder]}`;
}

export default class TarotCard {
  constructor () {
    const number = dieRoll(0, 71);

    if (number < 50) {
      // Minor arcana;
      this.isMinorArcana = true;
      this.suit = ['wings', 'claws', 'fangs', 'eyes', 'tongues'][Math.floor(number / 10)];
      this.cardVal = (number % 10);
    } else {
      this.isMinorArcana = false;
      this.arcanaName = MAJOR_ARCANA[number - 50];
    }

    this.refNum = number;

  }

  get title () {
    if (this.isMinorArcana) return `${MINOR_NAMES[this.cardVal]} of ${this.suit} (${this.refNum})`;
    if (this.refNum === 62) return "XIII";
    if (this.refNum === 70) return "The Protoplasm (70)";
    return `${roman(this.refNum - 49)} The ${this.arcanaName} (${this.refNum})`;
  }

  get description () {
    return "A tarot card.";
  }

  get effect () {
    return "Does something.";
  }
}
