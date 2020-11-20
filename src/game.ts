import keys, { movementKeys, normalizeKey } from './keys.ts';
import { createWorld as init } from './world.ts';

import { Screen } from './screens/index.ts';
import intro from './screens/intro.ts';
import ingame from './screens/ingame.ts';


const rafDelay = 50;

/**
 * Create the render frame with
 * relevant environmental variables
 * living in the closure.
 */
const createRenderer = (world, canvas, scale) => {
  const ctx = canvas.getContext('2d');

  /**
   * return function to render
   * on each tick
   */
  return () => {
    const { screen } = world;
    if (screen === Screen.INTRO) {
      intro(scale, ctx);
    } else if (screen === Screen.INGAME) {
      ingame(ctx, world, canvas, scale);
    }
  }
}

export function main(canvas, width, height, scale) {
  let world = init(width, height);
  let renderer = createRenderer(world, canvas, scale);
  canvas.width = width * scale;
  canvas.height = height * scale;

  window.onkeydown = (e) => {
    const { keyCode: keyCodeRaw } = e;
    const { player } = world;
    const keyCode = normalizeKey(keyCodeRaw);

    const hitEnter = keyCode == keys.enter;
    const hitSpace = keyCode == keys.space;
    const hitR = keyCode === keys.R;
    const wantsAnotherGame = !player.alive && (hitEnter || hitSpace);

    if (wantsAnotherGame || hitR) {
      world = init(width, height);
      renderer = createRenderer(world, canvas, scale);
      world.screen = Screen.INGAME;
    } else if (hitEnter) {
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
  /**
   * I'm not sure this is the proper way to implement the game
   * render loop. Please open a PR if you have a better idea.
   */
  const pid = setInterval(() => {
    requestAnimationFrame(renderer);
  }, rafDelay);

  return pid
}

