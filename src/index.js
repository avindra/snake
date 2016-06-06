const $ = (a) => document.getElementById(a);
const dev = $('dev');
const canvas = $('game');
const ctx = canvas.getContext('2d');
import { init, tick } from './world';
import keys from './keys';

const scale = 19;

const { food, player, width, height } = init();

function render() {
  // render background
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  const { alive } = player;

  ctx.fillStyle = alive ? 'white' : 'red';
  // render player
  player.points.forEach(p =>
    ctx.fillRect(p.x * scale, p.y * scale, scale, scale)
  );

  // render food
  ctx.fillStyle = alive ? 'red' : 'white';
  ctx.fillRect(food.x * scale, food.y * scale, scale, scale);

  if (alive) tick();
}

window.onkeydown = e => {
  const { keyCode } = e;

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

  dev.textContent = `Last keycode -> ${keyCode}`;
};

canvas.width = width * scale;
canvas.height = height * scale;
dev.textContent = '';
setInterval(render, 100);
