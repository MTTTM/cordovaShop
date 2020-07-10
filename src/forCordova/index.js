let CORDOVAFN = {}
//网络状态
function checkConnection() {
    var networkState = navigator.connection.type;
    var states = {};
    states[Connection.UNKNOWN] = 'Unknown connection';
    states[Connection.ETHERNET] = 'Ethernet connection';
    states[Connection.WIFI] = 'WiFi connection';
    states[Connection.CELL_2G] = 'Cell 2G connection';
    states[Connection.CELL_3G] = 'Cell 3G connection';
    states[Connection.CELL_4G] = 'Cell 4G connection';
    states[Connection.CELL] = 'Cell generic connection';
    states[Connection.NONE] = 'No network connection';
    return states[networkState];
}

if ('_cordovaNative' in window) {
    CORDOVAFN = {
        splashscreenHide() {
            navigator.splashscreen.hide();
        },
        backgroundColorByHexString(color) {
            let c = color ? color : "#fff";
            StatusBar.backgroundColorByHexString(c);
        },
        /**
         * 
         * @param {*} style  -- styleDefault ||styleLightContent||styleBlackTranslucent
         */
        setStatusStyle(style = 'styleDefault', attr) {
            try {
                let fun = typeof StatusBar[style];
                if (typeof fun == 'function') {
                    fun();
                }
            } catch (e) {

            }
        },
        offlineEvent(callback) {
            function onOffline() {
                typeof callback == 'function' && callback(checkConnection());
            }
            document.removeEventListener("offline", onOffline, false);
            document.addEventListener("offline", onOffline, false);
        },
        onlineEvent(callback) {
            function onOnline() {
                typeof callback == 'function' && callback(checkConnection());
            }
            document.removeEventListener("online", onOnline, false);
            document.addEventListener("online", onOnline, false);
        }
    }
}
export default CORDOVAFN;