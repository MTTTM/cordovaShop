<template>
  <van-notify v-model="show" :type="type" >
   <div :style="{paddingTop:statusHeight+'px'}">
             <van-icon name="bell" style="margin-right: 4px;" />
            <span>{{msg}}</span>
   </div>
  </van-notify>
</template>
<script>
let timer;
export default {
  data() {
    return {
      show: false,
      type:'success',
      msg:"----",
      checkConnection:""
    };
  },
  computed:{
      statusHeight(){
          return this.$store.state.cvd.statusHeight;
      }
  },
  watch:{
      "$store.state.cvd.initSucc"(){
           this.init();
      }
  },
  methods: {
    showNotify() {
      this.show = true;
      clearTimeout(timer);
      timer=setTimeout(() => {
        this.show = false;
      }, 2000);
    },
    /**
        s  1 连接成功，2 掉网
     */
    setStatus(s=1){
        if(s==1){
            this.msg='网络连接失败';
           this.type='warning';
        }
        else{
            this.msg='网络连接成功';
           this.type='success';
        }
        this.showNotify();
    },
    init() {
      this.checkConnection = this.$cordovaFn.emit("checkConnection");
      //离线事件
      this.$cordovaFn.emit("offlineEvent", netWork => {
        //如果掉线先，不是掉线状态
        if (this.checkConnection != "No network connection") {
           this.setStatus(1);
        }
        this.checkConnection = this.$cordovaFn.emit("checkConnection");
      });
      //重新连接网络事件
      this.$cordovaFn.emit("onlineEvent", netWork => {
        //如果切换网络前是离线状态
        //if (this.checkConnection == "No network connection") {
          this.setStatus(2);
       // }
        this.checkConnection = this.$cordovaFn.emit("checkConnection");
      });
    }
  }
};
</script>