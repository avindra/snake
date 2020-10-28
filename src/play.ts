import * as blessed from 'blessed';

import {worldToVector} from './net/worldToVector'
import {IWorld, createWorld, tick} from './world.ts';

const program = blessed.program();

program.key('q', function(ch, key) {
  program.clear();
  program.disableMouse();
  program.showCursor();
  program.normalBuffer();
  process.exit(0);
});

program.alternateBuffer();
program.enableMouse();
program.hideCursor();
program.clear();

program.move(1, 1);
program.bg('black');
program.write('Hello world', 'blue fg');

const world = createWorld(10, 10);
for (let r = 0; r < 10; ++r) {
  for (let c = 0; c < 10; ++c) {
    program.move(r, c);
    program.bg('red');
    program.write('x');
    program.bg('!red');
  }
}

program.setx((program.cols / 2 | 0) - 4);
program.down(5);
program.write('Hi again!');
program.bg('!black');
program.feed();
