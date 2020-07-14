<template>
  <div>
    <van-nav-bar
      :title="title"
      left-text
      left-arrow
      @click-left="onBack"
      fixed
      z-index="200"
      :style="{paddingTop:statusHeight}"
    />
    <van-nav-bar
      :title="title"
      left-text
      left-arrow
      z-index="190"
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

<style>
</style>
