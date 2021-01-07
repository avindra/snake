import keys, { movementKeys, normalizeKey } from './keys.ts';
import { createWorld as init, IWorld } from './world.ts';

import { Screen } from './screens/index.ts';
import intro from './screens/intro.ts';
import ingame from './screens/ingame.ts';


const rafDelay = 50;

const is_tty = !('requestAnimationFrame' in self);


/**
 * Setup rendering functions
 */
export const main = (canvas: HTMLCanvasElement, width: number, height: number, scale: number, render_impl?: Function) => {
  // todo: have this not be a "let"
  let world = init(width, height);
  const ctx = canvas.getContext('2d');
  const ticker = () => {
    const s = world.screen;
    if (s === Screen.INTRO) {
      intro(scale, ctx!);
    } else if (s === Screen.INGAME) {
      ingame(ctx!, world, canvas, scale);
    }
  };

  const action = is_tty ? () => {
    ticker();
    render_impl();
   } : () => {
    requestAnimationFrame(ticker);
  };

  const onKeyDown = (e: KeyboardEvent) => {
    const { keyCode: keyCodeRaw } = e;
    const { player } = world;
    const keyCode = normalizeKey(keyCodeRaw);

    const hitEnter = keyCode == keys.enter;
    const hitSpace = keyCode == keys.space;
    const hitR = keyCode === keys.R;
    const wantsAnotherGame = !player.alive && (hitEnter || hitSpace);

    if (hitR || hitEnter) {
      if (wantsAnotherGame) {
        world = init(width, height);
      }
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

  canvas.width = width * scale;
  canvas.height = height * scale;

  window.onkeydown = onKeyDown;


  return () => setInterval(action, rafDelay);
}
