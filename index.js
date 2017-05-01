/**
 * Hook to deploy.
 * */

const spawn = require('child_process').spawn;

if (process.env.NODE_ENV === 'production') {
  const npm = spawn('npm', ['run', 'release']);

  npm.stdout.on('data', (data) => {
    console.log(`${data}`);
  });

  npm.stderr.on('data', (data) => {
    console.log(`${data}`);
  });

  npm.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
}
