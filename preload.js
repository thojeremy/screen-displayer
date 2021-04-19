const DOMService = require("./app/services/DOMService");
const {contextBridge, ipcRenderer} = require("electron");

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
    // Browse DOM ids replacements constants
    DOMService.replaceDomIdsWithConstants();
});

contextBridge.exposeInMainWorld(
    "api", {
        send: (channel, data) => {
            ipcRenderer.send(channel, data);
        },
        receive: (channel, func) => {
            ipcRenderer.once(channel, func);
        }
    }
);