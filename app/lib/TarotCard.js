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

const MAJOR_ARCANA_EFFECTS = [
  function () {
    // Compound Eye
    return {
      message: "This card has no effect."
    };
  },

  function () {
    // Proboscis
    return {
      message: "This card has no effect."
    };
  },

  function () {
    // Talon
    return {
      message: "This card has no effect."
    };
  },

  function () {
    // Hooked Beak
    return {
      message: "This card has no effect."
    };
  },

  function () {
    // Oculus
    return {
      message: "This card has no effect."
    };
  },

  function () {
    // Tentacle
    return {
      message: "This card has no effect."
    };
  },

  function () {
    // Hooves
    return {
      message: "This card has no effect."
    };
  },

  function () {
    // Mane
    return {
      message: "This card has no effect."
    };
  },

  function () {
    // Batwing
    return {
      message: "This card has no effect."
    };
  },

  function () {
    // Wheel
    return {
      message: "The Wheel refreshes your hand.",
      effect: 'wheel'
    };
  },

  function (character) {
    // Molt
    character.prime(function (character, card) {
      if (!card.isMinorArcana) return {
        message: "The invocation fizzles; those cards don't combine."
      };
      character[card.suit] = 0;
      return {
        message: `The Molt takes away all of your ${card.suit}`
      };
    });
    return {
      message: "You prepare to combine the Molt card with another card..."
    };
  },

  function () {
    // Lash
    return {
      message: "This card has no effect."
    };
  },

  function () {
    // UNNAMED
    return {
      message: "This card has no effect."
    };
  },

  function () {
    // Grin
    return {
      message: "This card has no effect."
    };
  },

  function () {
    // Maw
    return {
      message: "This card has no effect."
    };
  },

  function () {
    // Spine
    return {
      message: "This card has no effect."
    };
  },

  function () {
    // Angler
    return {
      message: "This card has no effect."
    };
  },

  function () {
    // Wolf
    return {
      message: "This card has no effect."
    };
  },

  function () {
    // Dragon
    return {
      message: "This card has no effect."
    };
  },

  function () {
    // Face
    return {
      message: "This card has no effect."
    };
  },

  function () {
    // Protoplasm
    return {
      message: "This card has no effect."
    };
  },
];




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
    if (this.isMinorArcana) return `${MINOR_NAMES[this.cardVal]} of ${this.suit}`;
    if (this.refNum === 62) return "XIII";
    if (this.refNum === 70) return "The Protoplasm";
    return `${roman(this.refNum - 49)} The ${this.arcanaName}`;
  }

  get description () {
    return "A tarot card.";
  }

  get effect () {
    return "Does something.";
  }

  cardEffect (character) {
    if (!this.isMinorArcana) return MAJOR_ARCANA_EFFECTS[this.refNum - 50](character);
    if (this.cardVal > 6) return {
      message: "This card has no effect."
    };
    if (this.cardVal + 1 <= character[this.suit]) return {
      message: "This card isn't strong enough."
    };
    character[this.suit] = this.cardVal + 1;
    return {
      message: `The card increases your ${this.suit} to ${this.cardVal + 1}`
    }
  }
}
