import Point from './point';
import Player from './player';
import beep from './sound';
import { Screen } from './screens/index';
import {rand} from './util';

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

function moveFood(w: IWorld) {
  const { width, height } = w;

  let potentialTarget;

  do {
    potentialTarget = new Point(
      rand(0, width - 1),
      rand(0, height - 1),
    );
  } while (blockingTail(potentialTarget));


  w.food.move(
    potentialTarget.x,
    potentialTarget.y,
  );

  ++w.player.tail;
}

/**
 * Returns "false" if the player
 * is dead.
 * 
 */
export function tick(w: IWorld) {
  const { player } = w;
  const playerPos = player.getHead();

  if (playerPos.x === w.food.x
    && playerPos.y === w.food.y) {
    moveFood(w);
    player.consume();
    beep();
  }

  /** 
   * Wall collision: check if player went out of bounds
   */
  const newPos = player.tick();
  const { x, y } = newPos;
  if (
    x < 0 || y < 0
    || x > w.width - 1 || y > w.height - 1
  ) {
    player.alive = false;
    return false;
  }

  return true;
}

export function createWorld(width, height) {
  data.width = width;
  data.height = height;

  data.player = new Player();
  data.food = new Point();
  moveFood(data);

  return data;
}
