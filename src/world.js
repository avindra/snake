import keys from "./keys";

const data = {};

function random(min, max)
{
  const { floor, random } = Math;
  return floor(random() * (max - min + 1)) + min;
}

function spawnFood()
{
  const { width, height } = data;
  return {
    x : random(0, width - 1),
    y : random(0, height - 1),
  };
}

export function init() {
  data.height = 20;
  data.width = 40;

  data.player = {
    x : 0,
    y : 0,
    headed : keys.right,
  };

  data.food = spawnFood();

  console.log('player', data.player);
  console.log('food', data.food);

  return data;
}