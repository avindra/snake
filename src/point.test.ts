import Point from './point.ts'
import { assertEquals, assert } from "https://deno.land/std@0.74.0/testing/asserts.ts";

const mkPoint = (x: number, y: number) => {
  const p = new Point();
  p.move(x, y);
  return p;
}

const p = mkPoint(4, 8);

Deno.test('stores coordinates as x, y pairs', () => {
  assertEquals(p.x, 4);
  assertEquals(p.y, 8);
});

Deno.test('can be moved', () => {
  p.move(15, 16);
  assertEquals(p.x, 15);
  assertEquals(p.y, 16);
})

Deno.test('can determine the equality of two points', () => {
  const p2 = mkPoint(23, 42);
  const p3 = mkPoint(108, 1337);
  const p4 = mkPoint(23, 42);
  assert(p2.equals(p4));
  assert(!p4.equals(p3));
})