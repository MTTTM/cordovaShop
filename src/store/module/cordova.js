const cdv= {
    namespaced: true,
    state: {
         statusHeight: 0,//状态栏高度
         initSucc:false,//cordova初始化成功
    },
    mutations: {
        updateStatusHeight(state, statusHeight) {
            let parInt=parseInt(statusHeight);
            if(!isNaN(Number(parInt))){
                state.statusHeight = statusHeight;
            }
            
        },
        updateInitSucc(state,bool=true){
            state.initSucc=bool;
        }
    },
    actions: {

    }
}
export default cdv;