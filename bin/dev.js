import { exec } from "https://deno.land/x/exec/mod.ts";

const json = Deno.readTextFileSync('package.json');
const build = JSON.parse(json).scripts.build;

// https://github.com/denoland/deno/blob/249d82099ecc2851ba0309d5b57a77fd8e728c9a/docs/examples/file_system_events.md#example
const watcher = Deno.watchFs(".");
console.log('Dev server started. Waiting for events... ');
for await (const event of watcher) {
  console.log(">>>> firing rebuild", event);
  exec(build);
}
