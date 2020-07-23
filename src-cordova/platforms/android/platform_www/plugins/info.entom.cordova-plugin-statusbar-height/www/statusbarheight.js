cordova.define("info.entom.cordova-plugin-statusbar-height.statusbarheight", function(require, exports, module) {
/*global cordova, module*/

module.exports = {
    read: function (successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, "Statusbarheight", "read");
    }
};

});
