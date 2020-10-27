# Snake  [![Build Status](https://github.com/avindra/snake/workflows/ci/badge.svg)](https://github.com/avindra/snake/actions)

It is an implementation of the game of snake using reference JavaScript, and `<canvas>` for graphical output. The codebase uses Typescript (mostly for a handful of `interface` descriptions.)

There is experimental sound: unplug your headphones to rip beeps over your speakers.

[Click to play 🐍!](https://avindra.github.io/snake)

## Requirements

 * Node.js 15 or higher
 * Deno (for unit tests)

## Usage

 * `yarn build` to bundle a build in `dist/`
 * `yarn install && yarn dev` to get a watch/recompile server
 * Unit tests are co-located with the code.
   * Run [`deno test src`](https://deno.land/manual/testing#assertions) to run unit tests.
