const $ = (a) => document.getElementById(a);
const dev = $('dev');
const canvas = $('game');
const ctx = canvas.getContext('2d');

const gamesize = {
  width : 40,
  height : 20,
};

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
}


function render() {
  // render background
  ctx.fillStyle = "black";
  ctx.fillRect (0, 0, canvas.width, canvas.height);

  // render player
  ctx.fillStyle = "white";
  ctx.fillRect (my.x * scale, my.y * scale, scale, scale);
}

window.onkeydown = function(e) {
  const { keyCode } = e;
  dev.textContent = keyCode;
  const { up, left, right, down } = keys;

  switch(keyCode)
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

setInterval(render, 100);