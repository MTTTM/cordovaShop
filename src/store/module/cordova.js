const cdv= {
    namespaced: true,
    state: {
        statusHeight: 10,
    },
    mutations: {
        updateStatusHeight(state, statusHeight) {
            let parInt=parseInt(statusHeight);
            if(!isNaN(Number(parInt))){
                state.statusHeight = statusHeight;
            }
            
        }
    },
    actions: {

    }
}
export default cdv;