DENO ?= deno

train:
	@bin/tsnode train.js

sim:
	@bin/tsnode sim.ts

setup:
	@cd src/net && npm rebuild @tensorflow/tfjs-node-gpu --build-from-source

test-model:
	@cd src/net && node check_model.js

dev:
	@bin/build --watch

build:
	@bin/build

play:
	@$(DENO) run -c tsconfig.json --unstable --no-check src/tty.ts
