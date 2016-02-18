const $ = (a) => document.getElementById(a);
const dev = $('dev');
const canvas = $('game');
const ctx = canvas.getContext('2d');
import { getFood } from "./world";

const scale = 10;

const keys = {
  up : 38,
  down : 40,
  left : 37,
  right : 39,
}

let my = {
  x : 0,
  y : 0,
  headed : keys.right,
}

let food = getFood();

function render() {
  // render background
  ctx.fillStyle = "black";
  ctx.fillRect (0, 0, canvas.width, canvas.height);

  // render player
  ctx.fillStyle = "white";
  ctx.fillRect (my.x * scale, my.y * scale, scale, scale);

  // render food
  ctx.fillStyle = "red";
  ctx.fillRect (food.x * scale, food.y * scale, scale, scale);

  movePlayer(my.headed);
}

function movePlayer(key)
{
  const { up, left, right, down } = keys;

  switch(key)
  {
    case up:
      --my.y;break;
    case down:
      ++my.y;break;
    case left:
      --my.x;break;
    case right:
      ++my.x;break;
  }
}

window.onkeydown = function(e) {
  const { keyCode } = e;
  e.preventDefault();
  dev.textContent = keyCode;

  my.headed = keyCode;
}

setInterval(render, 100);