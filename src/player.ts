// @ts-ignore
import Point from './point.ts';
// @ts-ignore
import keys from './keys.ts';

type NumIdent = (N: number) => number;

const inc: NumIdent = (N) => N + 1;
const dec: NumIdent = (N) => N - 1;

class Player {
  points: Point[];
  headed: number;
  tail: number;
  alive: boolean;

  constructor() {
    this.points = [new Point()];
    this.headed = keys.right;
    this.tail = 0;
    this.alive = true;
  }

  getHead() {
    return this.points[0];
  }

  consume() {
    this.points.push(Object.assign({},
      this.getHead()));
    ++this.tail;
  }

  tick() {
    const {
      up, left, right, down,
    } = keys;

    const head = this.getHead();

    const newHead = new Point();
    newHead.move(head.x, head.y);

    let direction: NumIdent;

    switch(this.headed) {
      case up: case left: direction = dec; break;
      case down: case right: direction = inc; break;
    }

    let att: string;
    switch (this.headed) {
      case up: case down: att = 'y'; break;
      case left: case right: att = 'x'; break;
    }

    // @ts-ignore
    newHead[att] = direction(newHead[att]);

    this.points.unshift(newHead);
    this.points.pop();
    this.points.slice(1).forEach((p) => {
      if (p.x === newHead.x && p.y === newHead.y) {
        this.alive = false;
      }
    });
    return newHead;
  }
}

export {
  Player
}

export default Player;
