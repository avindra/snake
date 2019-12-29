import Point from './../point';
import { IWorld } from './../world';

/**
 * Flatten two-dimensional game grid
 * into one dimensional vector for processing
 * in the network.
 */
const pointToIndex = (p: Point, width: number, height: number ) => {
  const area = Math.max(0, p.y - 1) * height;
  const cellOffset = p.x
  return area + cellOffset;
}

/**
 * Define vector representation from
 * world data
 */
export function worldToVector(world: IWorld): number[] {
  const { food, player, width, height } = world;
  const cells = width * height;
  const vector = new Array(cells);

  const foodIndex = pointToIndex(food, width, height);
  const playerIndexes = player.points.map(p => pointToIndex(p, width, height));

  vector[foodIndex] = 3;
  playerIndexes.forEach(pIndex => {
    vector[pIndex] = 1;
  });

  for (let i = 0; i < cells; ++i) {
    if(!vector[i]) {
      vector[i] = 0;
    }
  }

  return vector;
}
