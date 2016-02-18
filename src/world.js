import keys from "./keys";

const data = {};
let height;
let width;

function random(min, max)
{
  const { floor, random } = Math;
  return floor(random() * (max - min + 1)) + min;
}

function spawnFood()
{
  return {
    x : random(0, width - 1),
    y : random(0, height - 1),
  };
}

export function init() {
  height = 20;
  width = 40;

  data.player = {
    x : 0,
    y : 0,
    headed : keys.right,
  };

  data.food = spawnFood();

  return data;
}