export default class Point {
  x: number;
  y: number;

  constructor(x = 0, y = 0) {
    this.move(x, y);
  }

  move(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  equals(p) {
    return this.x === p.x && this.y === p.y;
  }
}
