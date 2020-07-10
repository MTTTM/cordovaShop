let CORDOVAFN = {}
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

        }
    }
}
export default CORDOVAFN;