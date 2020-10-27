import {main} from './game';
import keys, { movementKeys, normalizeKey } from './keys';
import { createWorld } from './world';

import { Screen } from './screens/index';
import intro from './screens/intro';
import ingame from './screens/ingame';

const $ = a => document.getElementById(a);
const canvas = $('game') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const width = 20;
const height = 20;
const scale = window.innerHeight / height;

let world = createWorld(width, height);

const rafDelay = 50;

function render() {
  const { screen } = world;
  if (screen === Screen.INTRO) {
    intro(scale, ctx);
  } else if (screen === Screen.INGAME) {
    ingame(ctx, world, canvas, scale);
  }

  /**
   * I'm not sure this is the proper way to implement the game
   * render loop. Please open a PR if you have a better idea.
   */
  setTimeout(() => {
    requestAnimationFrame(render);
  }, rafDelay);
}

window.onkeydown = (e) => {
  const { keyCode: keyCodeRaw } = e;
  const { player } = world;
  const keyCode = normalizeKey(keyCodeRaw);

  if (keyCode === keys.R) {
    world = createWorld(width, height);
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

canvas.width = width * scale;
canvas.height = height * scale;
requestAnimationFrame(render);

main(canvas, width, height, scale);
