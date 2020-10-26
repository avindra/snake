import { tick, IWorld, createWorld } from '../world';
import { sleep, rand } from '../util';
import {arrowKeys} from '../keys';

import {worldToVector} from './worldToVector'

/**
 * Run a simulation of the game
 */

const width = 20;
const height = 20;


const render = (world: IWorld) => {
  const { width } = world;
  const inputVector = worldToVector(world);
  console.log("Rendering world vector", inputVector.length)
  for (let i = 0; i < inputVector.length; ++i) {
    process.stdout.write(String(inputVector[i]));
    if ((i + 1) % width == 0) {
      console.log();
    }
  }
}
const world = createWorld(width, height);

const playGame = async function() {
  let alive = true;
  while (alive) {
    render(world);
    alive = tick(world);

    const direction = rand(0, 3);
    world.player.headed = arrowKeys[direction];
    await sleep(500);
  }

};

if (process.env.NODE) {
  playGame();
}
