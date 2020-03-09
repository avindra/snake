import keys, { movementKeys, normalizeKey } from './keys';
import { init } from './world';

import { Screen } from './screens/index';
import intro from './screens/intro';
import ingame from './screens/ingame';


const rafDelay = 50;

const render = (world, canvas, scale) => () => {
  const { screen } = world;
  const ctx = canvas.getContext('2d');
  if (screen === Screen.INTRO) {
    intro(scale, ctx);
  } else if (screen === Screen.INGAME) {
    ingame(ctx, world, canvas, scale);
  }
}

export function main(canvas, width, height, scale) {
  let world = init(width, height);
  canvas.width = width * scale;
  canvas.height = height * scale;

  window.onkeydown = (e) => {
    const { keyCode: keyCodeRaw } = e;
    const { player } = world;
    const keyCode = normalizeKey(keyCodeRaw);

    if (keyCode === keys.R) {
      world = init(width, height);
      world.screen = Screen.INGAME;
    } else if (keyCode === keys.enter) {
      world.screen = Screen.INGAME;
    }

    /**
     * If we respond to any of the keys,
     * disable the native browser response.
    * */
    const movementKey = movementKeys.find(key => key === keyCode);
    if (movementKey) {
      e.preventDefault();
      player.headed = keyCode;
    }
  };
  const renderer = render(world, canvas, scale);
  /**
   * I'm not sure this is the proper way to implement the game
   * render loop. Please open a PR if you have a better idea.
   */
  const pid = setInterval(() => {
    requestAnimationFrame(renderer);
  }, rafDelay);

  return pid
}

