<template>
  <div>
    <page />
    <navigate />
  </div>
</template>

<script>
import navigate from "../components/footer/navigate.vue";
import page from "./page/page.vue";

export default {
  components: {
    page,
    navigate
  },
  mounted() {
     this.$cordovaFn.emit("getStatusbarHeight",h=>{
           this.$store.commit("cvd/updateStatusHeight",30);
        })
    this.$nextTick(() => {
      this.$cordovaFn.emit("init", () => {
      
        this.$cordovaFn.emit("splashscreenHide");
          this.$cordovaFn.emit("initStatusBar",this.$route.meta,true);
          let _checkConnection=this.$cordovaFn.emit("checkConnection");
        this.$cordovaFn.emit("offlineEvent", (netWork) => {
         if(_checkConnection!='No network connection'){
           this.$notify({ type: "warning", message: "网络连接失败" });
         }
        });
        this.$cordovaFn.emit("onlineEvent", (s) => {
          _checkConnection=this.$cordovaFn.emit("checkConnection");
          this.$notify({ type: "success", message: "网络连接成功" });
        });
        this.$cordovaFn.emit("getStatusbarHeight",h=>{
           this.$store.commit("cvd/updateStatusHeight",h);
        })
      });
    });
  }
};
</script>
<style>
</style>


