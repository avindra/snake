/**
 * Map of all keys to be used.
*/
interface Keys {
  [humanName: string]: number;
}

const keyMap = {
  up: 38,
  down: 40,
  left: 37,
  right: 39,
  enter: 13,
  R: 82,
  H: 72,
  J: 74,
  K: 75,
  L: 76,
}

export const vimKeys = [keyMap.K, keyMap.H, keyMap.L, keyMap.J,];
export const arrowKeys = [keyMap.up, keyMap.left, keyMap.right, keyMap.down];

export default keyMap as Keys;
