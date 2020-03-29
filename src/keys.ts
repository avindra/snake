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
  // convenience key for respawn
  space: 32,
}


/**
 * Support vim motion by normalizing the input to
 * an arrow key
 */
export const normalizeKey = (code: number) => {
  const iVimDirection = vimKeys.indexOf(code);
  if (iVimDirection !== -1) {
    return arrowKeys[iVimDirection];
  }

  return code;

}

const vimKeys = [keyMap.K, keyMap.H, keyMap.L, keyMap.J,];
export const arrowKeys = [keyMap.up, keyMap.left, keyMap.right, keyMap.down];

export const movementKeys = [...arrowKeys, ...vimKeys];

export default keyMap as Keys;
