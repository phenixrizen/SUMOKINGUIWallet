// This file is required by the index.html file and will
// be executed in the renderer process for that window.

// All of the Node.js APIs are available in this process.

const spawn = require('child_process').spawn;

//const ls = spawn('./assets/bin/sumokoind', ['-lh', '/usr']);

// Start sumokoind
const sumokoind = spawn('./assets/bin/sumokoind');

sumokoind.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
});

sumokoind.stderr.on('data', (data) => {
    console.log(`stderr: ${data}`);
});

sumokoind.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
});

// Start Wallet RPC