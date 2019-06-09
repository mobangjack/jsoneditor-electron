const ipc = require('electron').ipcRenderer

FileRetriever.prototype.setAdbFilePath = function(e) {
    this.filepath = e
};

FileRetriever.prototype.getAdbFilePath = function() {
    return this.filepath
};

app.retriever.setAdbFilePath("/system/etc/");

FileRetriever.prototype.openFromAdbDialog = function(e) {
    util.prompt({
        title: "Open from ADB",
        titleSubmit: "Open",
        description: "Open file from an ADB device. </br></br>The file must exist in the ADB device and the ADB command line tool should be set up properly in this machine.",
        inputType: "text",
        inputName: "filepath",
        inputDefault: this.getAdbFilePath(),
        callback: e
    })
};

FileRetriever.prototype.saveToAdbDialog = function(e) {
    util.prompt({
        title: "Save to ADB",
        titleSubmit: "Save",
        description: "Enter the save location in the ADB device. </br></br>The save location must exist in the ADB device.",
        inputType: "text",
        inputName: "filepath",
        inputDefault: this.getAdbFilePath(),
        callback: e
    })
};

FileRetriever.prototype.openFromAdb = function(e, t) {
    this.setAdbFilePath(e);
    var name = util.getName(e);
    var fullname = name + ".json";
    var msg = {"src_path": e, "dst_path": fullname};
    var returnValue = ipc.sendSync('openFromAdbReq', msg);
    var status = returnValue.status;
    var data = returnValue.data;
    if (status != 'ok')
    {
        t(status);
        return;
    }
    else
    {
        app.setData(data);
        app.setMetaData({
            name: name
        });
        app.setLocalStorageData(data);
    }
}

FileRetriever.prototype.saveToAdb = function(e, t, i) {
    var name = util.getName(e);
    if ((!name) || name == "")
    {
        if (app.doc.name)
        {
            name = app.doc.name;
            var lastToken = e.substr(e.length - 1, 1);
            if (lastToken == "/")
            {
                e = e + name;
            }
            else
            {
                e = e + "/" + name;
            }
        }
        else
        {
            var returnValue = "File name is empty!";
            i(returnValue);
            return;
        }
    }
    if (!e.endsWith(".json"))
    {
        e = e + ".json";
    }
    this.setAdbFilePath(e);
    if (!app.doc.name)
    {
        app.doc.name = name;
    }
    var data = app.getData();
    var src_path = app.doc.name + ".json";
    var msg = {"src_path": src_path, "data": data, "dst_path": e};
    var returnValue = ipc.sendSync('saveToAdbReq', msg);
    i(returnValue);
}

app.openFromADB = function(e) {
    function t(t, i) {
        t ? app.notify.showError(t) : i && (app.setData(i), app.setMetaData({
            name: util.getName(e)
        }))
    };
    e ? app.retriever.openFromAdbDialog(e, t) : app.retriever.openFromAdbDialog(function(e) {
        e && app.retriever.openFromAdb(e, t)
    });
};

app.saveToADB = function() {
    app.sync();
    var e = app.getData();
    app.retriever.saveToAdbDialog(function(t) {
        t && app.retriever.saveToAdb(t, e,
            function(e) {
                e ? app.notify.showError(e) : app.notify.showNotification('File has been saved to ADB "' + (t.endsWith(".json") ? t : t + ".json") + '"', 1e3)
            })
    })
};

function initOpenOption() {
    var a = document.createElement("a");
    a.setAttribute("id", "openFromADB");
    a.setAttribute("title", "Open file from ADB");
    a.appendChild(document.createTextNode("Open from ADB"));
    a.onclick = function(e) {
        app.openFromADB(),
            e.stopPropagation(),
            e.preventDefault()
    };

    var li = document.createElement("li");
    li.appendChild(a);

    var option = document.getElementById("openMenu");
    option.prepend(li);
}

function initSaveOption() {
    var a = document.createElement("a");
    a.setAttribute("id", "saveToADB");
    a.setAttribute("title", "Save to ADB");
    a.appendChild(document.createTextNode("Save to ADB"));
    a.onclick = app.saveToADB;

    var li = document.createElement("li");
    li.appendChild(a);

    var option = document.getElementById("saveMenu");
    option.prepend(li);
}

function initOption()
{
    initOpenOption();
    initSaveOption();
}

function frontInit() {
    initOption();
}

frontInit();