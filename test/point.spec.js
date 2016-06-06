import Point from './../src/point'
import expect from 'expect'

describe('Point', () => {
  const p = new Point(4, 8);

  it('stores coordinates as x, y pairs', () => {
    expect(p.x).toBe(4);
    expect(p.y).toBe(8);
  });

  it('can be moved', () => {
    p.move(15, 16);
    expect(p.x).toBe(15);
    expect(p.y).toBe(16);
  })

  it('can determine the equality of two points', () => {
    const p2 = new Point(23, 42);
    const p3 = new Point(108, 1337);
    const p4 = new Point(23, 42);
    expect(p2.equals(p4)).toBe(true);
    expect(p4.equals(p3)).toBe(false);
  })
})