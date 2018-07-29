import keys, { movementKeys } from './keys';
import { init } from './world';

import { Screen } from './screens';
import intro from './screens/intro';
import ingame from './screens/ingame';

const $ = a => document.getElementById(a);
const canvas = $('game') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const scale = 20;
const width = 20;
const height = 20;

let world = init(width, height);

function render() {
  const { screen } = world;
  if (screen === Screen.INTRO) {
    intro(ctx);
  } else if (screen === Screen.INGAME) {
    ingame(ctx, world, canvas, scale);
  }
  setTimeout(() => requestAnimationFrame(render), 80);
}

window.onkeydown = (e) => {
  const { keyCode } = e;
  const { player } = world;

  if (keyCode === keys.R) {
    world = init(width, height);
    console.log(' a whole new world!', world)
    world.screen = Screen.INGAME;
  } else if (keyCode === keys.enter) {
    world.screen = Screen.INGAME;
    console.log('w', world);
    console.log('s', Screen);

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
