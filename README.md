# Snake  [![Build Status](https://github.com/avindra/snake/workflows/ci/badge.svg)](https://github.com/avindra/snake/actions)

It is an implementation of the game of snake using reference JavaScript, and `<canvas>` for graphical output. The codebase uses Typescript (mostly for a handful of `interface` descriptions.)

There is experimental sound: unplug your headphones to rip beeps over your speakers.

[Click to play 🐍!](https://avindra.github.io/snake)

## Development

A [`Makefile`](./Makefile) is included for convenience.

`esbuild` is  used to build/bundle.

You need `deno` for testing and developing.

The dev server provides no HTTP server (use another program to serve the dir, like python's built in server).

 * run `make build` to build/bundle
 * run `make dev` to get a watch/recompile server
 * run [`deno test src`](https://deno.land/manual/testing#assertions) to run unit tests
   - Unit tests are co-located into src/
