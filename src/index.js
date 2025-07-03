if (process.env.ELECTRON_RUN_AS_NODE) {
  console.error('unexpected');
  console.error(__filename);
  console.error(process.argv);
  console.error(process.env);
  return;
}
const { fork } = require('node:child_process');
const path = require('node:path');
fork(path.join(__dirname, 'child.js'), [], {});
