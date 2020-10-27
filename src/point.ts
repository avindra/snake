export default class Point {
  x: number = 0;
  y: number = 0;

  move(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  equals(p: Point) {
    return this.x === p.x && this.y === p.y;
  }
}
