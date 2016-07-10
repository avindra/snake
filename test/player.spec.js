import Player from './../src/player';
import expect from 'expect';

describe('Player', () => {
  const p = new Player();

  it('has a head', () => {
    expect(isNaN(p.getHead().x)).toBe(false);
  });

});
