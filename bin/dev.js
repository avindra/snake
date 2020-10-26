import {exec} from 'child_process';
import Brah from "browser-sync";

// Start the server
const driver = Brah({server: "./dist"});
driver.watch('src/**').on('change', (file) => {
  console.log('Source file changed', file);
  exec('yarn build', (err, stdout, stderr) => {
    console.log('[esbuild]', stdout);
    driver.reload();
  });
});