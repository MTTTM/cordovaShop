let CORDOVAFN={}
if('_cordovaNative' in window){
    CORDOVAFN={
        splashscreenHide(){
            navigator.splashscreen.hide();
        }
    }
}
export default CORDOVAFN;