<template>
  <div id="app">
    <transition :name="transitionName">
      <keep-alive v-if="$route.meta.keep">
        <router-view />
      </keep-alive>
      <template v-else>
        <router-view />
      </template>
    </transition>

    <router-view name="tabBar"></router-view>
  </div>
</template>

<script>
import "./assets/style/common.css";

export default {
  name: "app",
  data() {
    return {
      transitionName: ""
    };
  },
  watch: {
    $route(to, from) {
      const toDepth = to.path.split("/").length;
      const fromDepth = from.path.split("/").length;
      console.log("to", to, from, toDepth);
      let path = ["home", "category", "cart", "user"];
      let toIndex = path.indexOf(to.name);
      let fromIndex = path.indexOf(from.name);
      if ((toIndex > -1 && fromIndex > -1) || to.path == from.path) {
        this.transitionName = "";
        return;
      }

      this.transitionName = toDepth < fromDepth ? "slide-right" : "slide-left";
    }
  }
};
</script>
<style lang="css">
.slide-right-enter-active,
.slide-right-leave-active,
.slide-left-enter-active,
.slide-left-leave-active {
  will-change: transform;
  transition: all 500ms;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 10;
  width: 100vw;
  transition-timing-function: linear
}
.slide-right-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.slide-right-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.slide-left-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}

.fade-in-active, .fade-out-active{
    transition: all 1s linear 
} 
.fade-in-enter, .fade-out-active{
     opacity: 0 
}
</style>

