const ipc = require('electron').ipcMain
const process = require('child_process');
const fs = require('fs');
const path = require('path');

function cmdcb(error, stdout, stderr) {
    if (error) {
        console.error(`error: ${error}`);
        return;
    }
    // console.log(`stdout: ${stdout}`);
    // console.log(`stderr: ${stderr}`);
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
    var returnValue = {};
    returnValue.status = "ok";
    returnValue.data = "";
    var src_path = a['src_path'];
    var ext_name = path.extname(src_path);
    if (ext_name != '.json')
    {
        returnValue.status = "Invalid file path. Only '.json' file is supported!";
        e.returnValue = returnValue;
        return;
    }

    var dst_path = a['dst_path'];
    pullFromAdb(src_path, dst_path, {});
    
    try {
        var stat = fs.statSync(dst_path);
        if(!stat.isFile())
        {
            returnValue.status = "adb pull failed";
        }
        else
        {
            var data = fs.readFileSync(dst_path);
            returnValue.data = data.toString();
        }
    } catch (error) {
        returnValue.status = error;
        console.log(error);
    }
    e.returnValue = returnValue;
}

function saveToAdbRep(e, a) {
    var src_path = a['src_path'];
    var data = a['data'];
    var dst_path = a['dst_path'];
    var returnValue = null;
    try {
        fs.writeFileSync(src_path, data);
        shell("adb remount");
        pushToAdb(src_path, dst_path, {});
        shell("adb shell sync");
    } catch (error) {
        returnValue = error;
        console.log(error);
    }
    e.returnValue = returnValue;
}

ipc.on('openFromAdbReq', openFromAdbRep);
ipc.on('saveToAdbReq', saveToAdbRep);