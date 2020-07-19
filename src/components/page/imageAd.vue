<template>
<div>
    <van-swipe :autoplay="3000" v-if="data.type=='1'" :style="'height:'+height+'px'"  >
        <van-swipe-item v-for="(image,index) in data.imagelist" :key="index" >
            <a :href="image.url">
                <img  v-lazy="image.src+''" :style="{width: '100%',height:height+'px'}" />
            </a>
        </van-swipe-item>
    </van-swipe>

</div>
</template>

<script>

export default {
    name:'imageAd',
    components:{
    },
    props:{
        data:Object
    },
    data(){
        return{
            height:0
        }
    },
    created(){
        if(this.data.imagelist.length==0||this.data.type!='1'){
            return;
        }
        var that=this;
        var image =this.data.imagelist[0];
        let img = new Image()
        img.src = image.src;
        var width= window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        img.onload = function () {
            that.height= Math.ceil(img.height/img.width * width);
        }
    }
}
</script>

<style>

</style>
