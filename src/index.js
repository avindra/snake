const $ = (a) => document.getElementById(a);
const dev = $('dev');
const canvas = $('game');
const ctx = canvas.getContext('2d');
import { init, tick } from './world';
import keys from './keys';

const scale = 20;
const width = 20;
const height = 20;

let world = init(width, height);

function render() {
  const { player, food } = world;
  // render background
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const { alive } = player;

  // render food
  ctx.fillStyle = alive ? 'red' : 'white';
  ctx.fillRect(food.x * scale, food.y * scale, scale, scale);

  ctx.fillStyle = alive ? 'white' : 'red';
  // render player
  player.points.forEach(p =>
    ctx.fillRect(p.x * scale, p.y * scale, scale, scale)
  );

  // render eyes
  const head = player.getHead();
  ctx.fillStyle = 'green';
  let xOffset = 0;
  let yOffset = 0;
  const headX = head.x * scale;
  const headY = head.y * scale;
  const eyeBallSize = scale / 5;
  switch (player.headed) {
    case keys.down:
      yOffset = scale - eyeBallSize;
    case keys.up: // eslint-disable-line no-fallthrough
      ctx.fillRect(headX, headY + yOffset, eyeBallSize, eyeBallSize);
      ctx.fillRect(headX + (scale - eyeBallSize), headY + yOffset, eyeBallSize, eyeBallSize);
      break;
    case keys.right:
      xOffset = scale - eyeBallSize;
    case keys.left: // eslint-disable-line no-fallthrough
      ctx.fillRect(headX + xOffset, headY, eyeBallSize, eyeBallSize);
      ctx.fillRect(headX + xOffset, headY + (scale - eyeBallSize), eyeBallSize, eyeBallSize);
      break;
    default:
      throw new Error('wat');
  }

  if (alive) tick();

  dev.textContent = `Your score: ${player.points.length - 1}`;
}

window.onkeydown = e => {
  const { keyCode } = e;
  const { player } = world;

  if (keyCode === 82) { // R: reset
    world = init(width, height);
  }


  /**
   * If we respond to any of the keys,
   * disable the native browser response.
  **/
  Object
    .keys(keys)
    .map(k => keys[k])
    .forEach(code => {
      if (code === keyCode) {
        e.preventDefault();
        player.headed = keyCode;
      }
    });
};

canvas.width = width * scale;
canvas.height = height * scale;
setInterval(render, 100);
