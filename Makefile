DENO ?= deno

train:
	@bin/tsnode src/net/train.js

dev:
	@$(DENO) run --allow-read --allow-run bin/dev.js

build:
	@esbuild --bundle src/index.ts --outdir=dist --minify
	@cp index.html dist

play:
	@$(DENO) run -c tsconfig.json --unstable --no-check src/tty.ts