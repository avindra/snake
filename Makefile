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
	@$(DENO) run --allow-read --allow-run bin/dev.js

build:
	@esbuild --bundle src/index.ts --outdir=public --minify
	@cp index.html public

play:
	@$(DENO) run -c tsconfig.json --unstable --no-check src/tty.ts
