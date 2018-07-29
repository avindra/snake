import keys from './keys';
import { init, tick } from './world';

import { Screen } from './screens';
import intro from './screens/intro';

const $ = a => document.getElementById(a);
const dev = $('dev');
const canvas = $('game') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

const scale = 20;
const width = 20;
const height = 20;

let world = init(width, height);

function render() {
  const { player, food, screen } = world;
  if (screen === Screen.INTRO) {
    intro(ctx);
    return;
  }
  // render background
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const { alive } = player;

  // render food
  ctx.fillStyle = alive ? 'red' : 'white';
  ctx.fillRect(food.x * scale, food.y * scale, scale, scale);

  ctx.fillStyle = alive ? 'white' : 'red';
  // render player
  player.points.forEach(p => ctx.fillRect(p.x * scale, p.y * scale, scale, scale));

  // render eyes
  const head = player.getHead();
  ctx.fillStyle = 'green';
  let currOffset = 0;
  const headX = head.x * scale;
  const headY = head.y * scale;
  const eyeBallSize = scale / 5;
  const eyeOffset = scale - eyeBallSize;
  if (player.headed === keys.down || player.headed === keys.right) {
    currOffset = eyeOffset;
  }
  switch (player.headed) {
    case keys.down:
    case keys.up:
      ctx.fillRect(headX, headY + currOffset, eyeBallSize, eyeBallSize);
      ctx.fillRect(headX + eyeOffset, headY + currOffset, eyeBallSize, eyeBallSize);
      break;
    case keys.right:
    case keys.left:
      ctx.fillRect(headX + currOffset, headY, eyeBallSize, eyeBallSize);
      ctx.fillRect(headX + currOffset, headY + eyeOffset, eyeBallSize, eyeBallSize);
      break;
    default:
      throw new Error('wat');
  }

  if (alive) tick();

  dev.textContent = `Your score: ${player.points.length - 1}`;
  setTimeout(() => requestAnimationFrame(render), 80);
}

window.onkeydown = (e) => {
  const { keyCode } = e;
  const { player } = world;

  if (keyCode === 82) { // R: reset
    world = init(width, height);
  }


  /**
   * If we respond to any of the keys,
   * disable the native browser response.
  * */
  Object
    .keys(keys)
    .map(k => keys[k])
    .forEach((code) => {
      if (code === keyCode) {
        e.preventDefault();
        player.headed = keyCode;
      }
    });
};

canvas.width = width * scale;
canvas.height = height * scale;
requestAnimationFrame(render);
