export default class character {
  constructor () {
    this.wings = this.claws = this.fangs = this.eyes = this.tongues = 0;
    this.primed = false;
    this.traitSet = new Set();
  }

  get traits () {
    const traitList = [];
    this.traitSet.forEach(e => traitList.push(e));
    return traitList;
  }

  gainTrait (trait) {
    this.traitSet.add(trait);
  }

  loseTrait (trait) {
    this.traitSet.clear(trait);
  }

  hasTrait (trait) {
    return this.traitSet.has(trait);
  }

  get description () {
    let desc = [];

    if (this.wings > 0) desc.push(`Wings: ${this.wings}`);
    if (this.claws > 0) desc.push(`Claws: ${this.claws}`);
    if (this.fangs > 0) desc.push(`Fangs: ${this.fangs}`);
    if (this.eyes > 0) desc.push(`Eyes: ${this.eyes}`);
    if (this.tongues > 0) desc.push(`Tongues: ${this.tongues}`);
    if (this.traits.length > 0) desc.push(`Traits: ${this.traits}`);
    if (desc.length === 0) desc.push("You are ordinary in all respects.");

    return desc;
  }

  perform (card) {
    if (this.primed) {
      this.primed = false;
      return this.primedCB(this, card);
    }
    return card.cardEffect(this);
  }

  prime (cb) {
    this.primed = true;
    this.primedCB = cb;
  }
}
