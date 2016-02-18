const data = {};
let height;
let width;

let food = {};

function random(min, max)
{
  const { floor, random } = Math;
  return floor(random() * (max - min + 1)) + min;
}

function spawnFood()
{
  food = {
    x : random(0, width - 1),
    y : random(0, height - 1),
  };
  return food;
}

export function getFood() {
  height = 20;
  width = 40;

  return spawnFood();
}