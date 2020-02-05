import Point from './point';
import Player from './player';
import beep from './sound';
import { Screen } from './screens/index';

export interface IWorld {
  screen: Screen;
  player: Player;
  width: number;
  height: number;
  food: Point;
}
const data: IWorld = { screen: Screen.INTRO, player: null, width: 0, height: 0, food: null };

export function setScreen(screen: Screen) {
  data.screen = screen;
}

function rand(min, max) {
  const { floor, random } = Math;
  return floor(random() * (max - min + 1)) + min;
}
/* check if food spawn point is on top
 * of the tail
*/
function blockingTail(target) {
  const { points } = data.player;
  for (let i = 0; i < points.length; ++i) {
    const p = points[i];
    if (p.equals(target)) {
      return true;
    }
  }

  return false;
}

function moveFood() {
  const { width, height } = data;

  let potentialTarget;

  do {
    potentialTarget = new Point(
      rand(0, width - 1),
      rand(0, height - 1),
    );
  } while (blockingTail(potentialTarget));


  data.food.move(
    potentialTarget.x,
    potentialTarget.y,
  );

  ++data.player.tail;
}

export function tick() {
  const { player } = data;
  const playerPos = player.getHead();

  if (playerPos.x === data.food.x
    && playerPos.y === data.food.y) {
    moveFood();
    player.consume();
    beep();
  }

  /* detect wall collisions */
  const newPos = player.tick();
  const { x, y } = newPos;
  if (
    x < 0 || y < 0
    || x > data.width - 1 || y > data.height - 1
  ) {
    player.alive = false;
  }
}

export function init(width, height) {
  data.width = width;
  data.height = height;

  data.player = new Player();
  data.food = new Point();
  moveFood();

  return data;
}
