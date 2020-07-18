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
        _backgroundColorByHexString(color='#ffffffff') {
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
        _getStatusbarHeight(fun) {
            cordova.plugins.StatusBarHeight.getValue(
                function(value) {
                    var pdr = window.devicePixelRatio; // 获取设备独立像素比
                   // var px = value * pdr; // 得到物理像素值
                   typeof fun==='function'&&fun(value);
                },
                function(error) {
                    typeof fun==='function'&&fun(0);
                    console.log(error);
                }
            )
        },
        _checkConnection(){
            return checkConnection();
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
        },
        //获取软件版本号
        _getVersionNumber(callback){
            cordova.getAppVersion.getVersionNumber(v=>{
                typeof callback == 'function' && callback(v);
            })
        },
        addEventListener(event,fn){
            document.addEventListener(event, fn, false);
        },
        removeEventListener(event,fn){
            document.removeEventListener(event, fn, false);
        },
        _init(fn){
            document.addEventListener('deviceready',fn, false);
        },
        _initStatusBar(meta={},reset=false){
            //使用了沉浸式后不再需要切换
            try{
                let statusBar=meta.statusBar?meta.statusBar:{};
                const {statusBarColor}=statusBar;
                let statusBarColorLocal=localStorage.getItem("$corodva_statusBarColor");
                if(String(statusBarColor)==String(statusBarColorLocal)&&!reset){
                    return;
                }
            localStorage.setItem("$corodva_statusBarColor",String(statusBarColor))
                //设置背景颜色
                CORDOVAFN.emit("overlaysWebView",true);// 是否覆盖webview,如果覆盖需要做相应的样式处理
                CORDOVAFN.emit("backgroundColorByHexString",statusBarColor);//设置背景
                CORDOVAFN.emit("setStatusStyle");//设置字体
            }catch(e){
                alert(e)
            }
            
        }
    }
 }
CORDOVAFN.emit=function(funStr,...args){
    if(funStr==='emit'){
        alert("emit 不允许调用自身")
    }
    let func=CORDOVAFN['_'+funStr];
    try{
        if(func&&typeof func ==='function'){
            func(...args);
        }
        else if('_cordovaNative' in window){
           alert(`CORDOVAFN 不存在 _${funStr} 函数`)
        }
    }catch(e){
       alert(e);
    }
   
}
/**
 * 对外调用方式是 CORDOVAFN.emit("_onlineEvent",参数1，参数2)
 */
export default CORDOVAFN;