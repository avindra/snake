DENO ?= deno

train:
	@bin/tsnode src/net/train.js

dev:
	@$(DENO) run --allow-read --allow-run bin/dev.js

build:
	@esbuild --bundle src/index.ts --outdir=public --minify
	@cp index.html public

play:
	@$(DENO) run -c tsconfig.json --unstable --no-check src/tty.ts