var osenv = require('osenv');

function getAppPath() {
    return require('path').dirname(require.main.filename);
}

function getHomeDir() {
    return osenv.home();
}