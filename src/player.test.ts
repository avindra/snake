import {Player} from './player.ts';
import { assertEquals } from "https://deno.land/std@0.74.0/testing/asserts.ts";

const p = new Player();

Deno.test('player has a head', () => {
  assertEquals(isNaN(p.getHead().x), false);
});
