const ipc = require('electron').ipcMain
const process = require('child_process');
const fs = require('fs');

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
    process.spawnSync(cmd, args, cb);
}

function pullFromAdb(src, dst, cb) {
    spawn('adb', ['pull', src, dst], cb);
}

function pushToAdb(src, dst, cb) {
    spawn('adb', ['push', src, dst], cb);
}

shell("adb devices", cmdcb);

function openFromAdbRep(e, a) {
    var src_path = a['src_path'];
    var dst_path = a['dst_path'];
    pullFromAdb(src_path, dst_path, {});
    // e.sender.send('openFromAdbRep', a);
    if(fs.statSync(dst_path).isFile())
    {
        e.returnValue = null;
    }
    else
    {
        e.returnValue = "adb pull failed";
    }
    console.log(a);
}

function saveToAdbRep(e, a) {
    var src_path = a['src_path'];
    var dst_path = a['dst_path'];
    pushToAdb(src_path, dst_path, {});
    // e.sender.send('saveToAdbRep', a);
    e.returnValue = null;
    console.log(a);
}

ipc.on('openFromAdbReq', openFromAdbRep);
ipc.on('saveToAdbReq', saveToAdbRep);