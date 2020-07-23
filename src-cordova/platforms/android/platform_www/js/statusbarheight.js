/*global cordova, module*/

module.exports = {
    read: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "Statusbarheight", "read");
    }
};
