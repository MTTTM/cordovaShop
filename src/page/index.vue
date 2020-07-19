<template>
  <div>
    <connectionNotice/>
    <page />
    <navigate />
  </div>
</template>

<script>
import navigate from "../components/footer/navigate.vue";
import page from "./page/page.vue";
import connectionNotice from "../forCordova/components/connectionNotice"
export default {
  components: {
    page,
    navigate,
    connectionNotice
  },
  mounted() {
    this.$nextTick(() => {
      this.$cordovaFn.emit("init", () => {
        setTimeout(()=>{
          this.$cordovaFn.emit("splashscreenHide");
        },1000)
        //获取状态蓝高度
        this.$cordovaFn.emit("getStatusbarHeight", h => {
          this.$store.commit("cvd/updateStatusHeight", h);
        });
        //初始化状态栏
        this.$cordovaFn.emit("initStatusBar", this.$route.meta, true);
        this.$store.commit("cvd/updateInitSucc",true);//初始化成功
      });
    });
  }
};
</script>
<style>
</style>


