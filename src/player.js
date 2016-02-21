import Point from "./point";
import keys from "./keys";
import beep from './sound';

export default class Player
{
  constructor()
  {
    this.points = [ new Point() ];
    this.headed = keys.right;
    this.tail = 0;
    this.alive = true;
  }

  getHead()
  {
    return this.points[0];
  }

  consume()
  {
    this.points.push(Object.assign({},
      this.getHead()
    ));
    ++this.tail;
    beep();
  }

  tick()
  {
    const { up, left, right, down } = keys;

    const head = this.getHead();

    const newHead = new Point(head.x, head.y);
    switch(this.headed)
    {
      case up:
        --newHead.y;break;
      case down:
        ++newHead.y;break;
      case left:
        --newHead.x;break;
      case right:
        ++newHead.x;break;
    }

    this.points.unshift(newHead);
    this.points.pop();
    this.points.slice(1).forEach(p => {
      if(p.x == newHead.x && p.y == newHead.y)
      {
        this.alive = false;
      }
    });
    return newHead;
  }
}