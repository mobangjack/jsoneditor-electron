const ipc = require('electron').ipcMain
const process = require('child_process');

function cmdcb(error, stdout, stderr) {
    if (error) {
        console.error(`error: ${error}`);
        return;
    }
    console.log(`stdout: ${stdout}`);
    console.log(`stderr: ${stderr}`);
}

function shell(cmd, cb) {
    process.exec(cmd, cb);
}

function spawn(cmd, args, cb) {
    process.spawn(cmd, args, cb);
}

function pullFromAdb(src, dst, cb) {
    spawn('adb', ['pull', src, dst], cb);
}

shell("adb devices", cmdcb);

ipc.on('ping', (e, a) => { pullFromAdb(a, '.', {}); e.sender.send('pong', a); console.log(a) });