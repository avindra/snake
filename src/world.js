import keys from "./keys";
import Point from "./point";

const data = {};

function random(min, max)
{
  const { floor, random } = Math;
  return floor(random() * (max - min + 1)) + min;
}

function moveFood()
{
  const { width, height } = data;
  data.food.move(
    random(0, width - 1),
    random(0, height - 1)
  );
}

export function tick() {
  const { up, left, right, down } = keys;
  const { player } = data;

  if(player.x == data.food.x
  && player.y == data.food.y)
  {
    moveFood();
  }

  switch(player.headed)
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

export function init() {
  data.height = 20;
  data.width = 40;

  data.player = new Point();
  data.player.headed = keys.right;

  data.food = new Point();
  moveFood();

  console.log('player', data.player);
  console.log('food', data.food);

  return data;
}