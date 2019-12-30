const { spawn } = require('child_process');


async function sinc() {
  const ls = spawn('git', ['pull']);
  await ls.stdout.on('data', (data) => {
    console.log(`stdout: ${data}`);
  });

  await ls.stderr.on('data', (data) => {
    console.error(`stderr: ${data}`);
  });

  await ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  })
}

setInterval(sinc, 2000)
