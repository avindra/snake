import { init, tick, IWorld } from './world';
import Point from './point';
import { sleep } from './util';

/**
 * Run a simulation of the game
 */

const width = 20;
const height = 20;


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
function worldToVector(world: IWorld): number[] {
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
const world = init(width, height);

const playGame = async function() {
    while (true) {
        render(world);
        tick(world);

        await sleep(500);
    }

};

playGame();
