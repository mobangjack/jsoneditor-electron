const ipc = require('electron').ipcMain
const process = require('child_process');

function shell(cmd, callback) {
    process.exec(cmd, callback);
}

function spawn(cmd, args, callback) {
    process.spawn(cmd, args, callback);
}

function pullFromAdb(e, callback) {
    spawn('adb', ['pull', e], callback);
}

shell("adb devices", (error, stdout, stderr) => {
    if (error) {
      console.error(`执行出错: ${error}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
  });

ipc.on('ping', (e, a) => { e.sender.send('pong', 'pong'); console.log(a) });