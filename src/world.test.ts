
import {initWorld, tick} from './world.ts';
import keys from './keys.ts';

import {assertEquals} from "https://deno.land/std@0.74.0/testing/asserts.ts";

const world = initWorld(3, 8);

// todo: rewrite test to be compatible
// with random spawn points
if (false)
Deno.test('game begins correctly', () => {
  assertEquals(world.player.getHead().x, 0);
  assertEquals(world.player.getHead().y, 0);
  
  tick(world);

  assertEquals(world.player.getHead().x, 1);
  assertEquals(world.player.getHead().y, 0);

  tick(world);
  assertEquals(world.player.getHead().x, 2);
  assertEquals(world.player.getHead().y, 0);

  world.player.headed = keys.down;
  tick(world);

  assertEquals(world.player.getHead().x, 2);
  assertEquals(world.player.getHead().y, 1);
});