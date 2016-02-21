import Point from "./point";
import Player from "./player";

const data = {};

function random(min, max)
{
  const { floor, random } = Math;
  return floor(random() * (max - min + 1)) + min;
}
/* check if food spawn point is on top
 * of the tail
*/
function blockingTail(target)
{

  const { points } = data.player;
  for(let i = 0; i < points.length; ++i)
  {
    const p = points[i];
    if(p.equals(target))
    {
      return true;
    }
  }

  return false;
}

function moveFood()
{
  const { width, height } = data;

  let potentialTarget;

  do
  {
    potentialTarget = new Point(
      random(0, width - 1),
      random(0, height - 1)
    );
  } while(blockingTail(potentialTarget));


  data.food.move(
    potentialTarget.x,
    potentialTarget.y
  );

  ++data.player.tail;
}

export function tick() {
  const { player } = data;
  const playerPos = player.getHead();

  if(playerPos.x == data.food.x
  && playerPos.y == data.food.y)
  {
    moveFood();
    player.consume();
  }

  player.tick();
}

export function init() {
  data.height = 20;
  data.width = 40;

  data.player = new Player();
  data.food = new Point();
  moveFood();

  console.log('player', data.player);
  console.log('food', data.food);

  return data;
}