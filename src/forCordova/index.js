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
        emit:CORDOVAFN.emit,
        _splashscreenHide() {
            navigator.splashscreen.hide();
        },
        _backgroundColorByHexString(color) {
            let c = color ? color : "#fff";
            StatusBar.backgroundColorByHexString(c);
        },
        /**
         * 
         * @param {*} style  -- styleDefault ||styleLightContent||styleBlackTranslucent
         */
        _setStatusStyle(style = 'styleDefault', attr) {
            try {
                let fun =  StatusBar[style];
                if (typeof fun === 'function') {
                    fun();
                }
            } catch (e) {

            }
        },
        _offlineEvent(callback) {
            function onOffline() {
                typeof callback == 'function' && callback(checkConnection());
            }
            document.removeEventListener("offline", onOffline, false);
            document.addEventListener("offline", onOffline, false);
        },
        _onlineEvent(callback) {
            function onOnline() {
                typeof callback == 'function' && callback(checkConnection());
            }
            document.removeEventListener("online", onOnline, false);
            document.addEventListener("online", onOnline, false);
        },
        _overlaysWebView(bool=true){
            StatusBar.overlaysWebView(bool);
        }
    }
 }
CORDOVAFN.emit=function(funStr,...args){
    if(funStr==='emit'){
        console.warn("emit 不允许传参调用")
    }
    let func=CORDOVAFN['_'+funStr];
    //alert(func)
    try{
        if(func&&typeof func ==='function'){
            func(...args);
        }
        else{
            console.warn(`CORDOVAFN 不存在 ${funStr} 函数`)
        }
    }catch(e){
       // alert(e);
    }
   
}
/**
 * 对外调用方式是 CORDOVAFN.emit("_onlineEvent",参数1，参数2)
 */
export default CORDOVAFN;