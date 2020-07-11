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
    this.$nextTick(() => {
        this.$cordovaFn.emit("splashscreenHide");
        this.$cordovaFn.emit("offlineEvent", () => {
          this.$notify({ type: "warning", message: "网络连接失败" });
        });
        this.$cordovaFn.emit("onlineEvent", () => {
          this.$notify({ type: "success", message: "网络连接成功" });
        });

    });
  }
};
</script>
<style>
</style>


