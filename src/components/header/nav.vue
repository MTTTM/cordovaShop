<template>
  <div>
    <van-nav-bar
      :title="title"
      left-text
      left-arrow
      @click-left="onBack"
      fixed
      z-index="200"
      class="cm-header"
      :style="{paddingTop:statusHeight}"
    />
    <van-nav-bar
      :title="title"
      left-text
      left-arrow
      z-index="190"
      class="cm-header"
      :style="{paddingTop:statusHeight}"
    />
  </div>
</template>

<script>
import { NavBar } from "vant";
export default {
  name: "headerNav",
  components: {
    [NavBar.name]: NavBar
  },
  props: {
    title: String
  },
  computed:{
    statusHeight(){
        return this.$store.state.cvd.statusHeight+"px";
    }
    
  },
  methods: {
    onBack() {
      history.back();
    }
  }
};
</script>

<style lang="less">
.cm-header{
 display: flex;
 .van-nav-bar__left{
   position: relative;
 }
 .van-nav-bar__title{
   position: relative;
   flex:1 0 auto;
 }
 .van-nav-bar__right{
   position: relative;
 }
}
</style>
