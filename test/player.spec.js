import Player from './../src/player';
import expect from 'expect';

describe('Player', () => {
  const p = new Player();

  it('stores coordinates as x, y pairs', () => {
    expect(p.x).toBe(4);
    expect(p.y).toBe(8);
  });

});
