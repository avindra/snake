const $ = (a) => document.getElementById(a);
const dev = $('dev');
const canvas = $('game');
const ctx = canvas.getContext('2d');
import { init } from "./world";
import keys from "./keys";

const scale = 10;

const { food, player } = init();

function render() {
  // render background
  ctx.fillStyle = "black";
  ctx.fillRect (0, 0, canvas.width, canvas.height);

  // render player
  ctx.fillStyle = "white";
  ctx.fillRect (player.x * scale, player.y * scale, scale, scale);

  // render food
  ctx.fillStyle = "red";
  ctx.fillRect (food.x * scale, food.y * scale, scale, scale);

  movePlayer(player.headed);
}

function movePlayer(key)
{
  const { up, left, right, down } = keys;

  switch(key)
  {
    case up:
      --player.y;break;
    case down:
      ++player.y;break;
    case left:
      --player.x;break;
    case right:
      ++player.x;break;
  }
}

window.onkeydown = function(e) {
  const { keyCode } = e;

  /**
   * If we respond to any of the keys,
   * disable the native browser response.
  **/
  Object
    .keys(keys)
    .map(k => keys[k])
    .forEach(code => {
      if(code == keyCode)
        e.preventDefault();
    })

  dev.textContent = keyCode;

  player.headed = keyCode;
}

setInterval(render, 100);