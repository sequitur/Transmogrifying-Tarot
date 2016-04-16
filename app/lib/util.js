export function dieRoll (min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
