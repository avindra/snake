import { IWorld } from './../world';
import keys from './../keys';

import { tick } from './../world';

import death from './death';
export default (ctx: CanvasRenderingContext2D, world: IWorld, canvas: HTMLCanvasElement, scale: number) => {
    const { player, food,} = world;
    // render background
    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const { alive } = player;

    // render food
    ctx.fillStyle = alive ? 'red' : 'white';
    ctx.fillRect(food.x * scale, food.y * scale, scale, scale);

    ctx.fillStyle = alive ? 'white' : 'red';
    // render player
    player.points.forEach(p => ctx.fillRect(p.x * scale, p.y * scale, scale, scale));

    // render eyes
    const head = player.getHead();
    ctx.fillStyle = 'green';
    let currOffset = 0;
    const headX = head.x * scale;
    const headY = head.y * scale;
    const eyeBallSize = scale / 5;
    const eyeOffset = scale - eyeBallSize;
    if (player.headed === keys.down || player.headed === keys.right) {
        currOffset = eyeOffset;
    }
    switch (player.headed) {
        case keys.down:
        case keys.up:
            ctx.fillRect(headX, headY + currOffset, eyeBallSize, eyeBallSize);
            ctx.fillRect(headX + eyeOffset, headY + currOffset, eyeBallSize, eyeBallSize);
            break;
        case keys.right:
        case keys.left:
            ctx.fillRect(headX + currOffset, headY, eyeBallSize, eyeBallSize);
            ctx.fillRect(headX + currOffset, headY + eyeOffset, eyeBallSize, eyeBallSize);
            break;
        default:
            throw new Error('wat');
    }
    const score = player.points.length - 1;

    if (alive) tick();
    else {
        death(ctx, score);
    }
}