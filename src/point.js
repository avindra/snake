export default class Point {
  constructor(x = 0, y = 0)
  {
    this.move(x, y);
  }

  move(x, y)
  {
    this.x = x;
    this.y = y;
  }
}