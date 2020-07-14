<template>
    <div :style="{height:height,width:'100%','z-index':500}" class="statusBar"></div>
</template>
<script>
export default {
    name:"statuBar",
    props:{
        plus:{
            type:Number,
            default:0
        }
    },
    computed:{
        height(){
            // let p=parseInt(this.plus);
            // if(isNaN(Number(p))){
            //     p=0;
            // }
            let t=(this.$store.state.cvd.statusHeight)+"px";
            return t;
        }
    }
}
</script>