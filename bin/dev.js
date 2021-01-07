import { exec } from "https://deno.land/x/exec/mod.ts";

const build = "make build";
// do at least one
await exec(build);

// https://github.com/denoland/deno/blob/249d82099ecc2851ba0309d5b57a77fd8e728c9a/docs/examples/file_system_events.md#example
const watcher = Deno.watchFs("src");
console.log('Dev server started. Waiting for events... ');
for await (const event of watcher) {
  console.log(">>>> firing rebuild", event);
  await exec(build);
}
