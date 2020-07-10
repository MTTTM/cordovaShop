<template>
    <div>
        <page/>
        <navigate />
    </div>
</template>

<script>
import navigate from '../components/footer/navigate.vue'
import page from './page/page.vue'

export default {
    components:{
        page,
        navigate
    },
    mounted(){
        this.$nextTick(()=>{
            this.$cordovaFn.splashscreenHide&&this.$cordovaFn.splashscreenHide();
             this.$cordovaFn.offlineEvent&&this.$cordovaFn.offlineEvent(()=>{
                 alert("没网络了")
                t
            });
             this.$cordovaFn.onlineEvent&&this.$cordovaFn.onlineEvent(()=>{
              alert("网络连接成功")
            });
        })
    }
}
</script>
<style>

</style>


