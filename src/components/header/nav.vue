<template>
  <div>
    <van-nav-bar
      :title="title"
      left-text
      left-arrow
      @click-left="onBack"
      fixed
      style="z-index:200"
    />
    <van-nav-bar
      :title="title"
      left-text
      left-arrow
      style="z-index:10"
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
  methods: {
    onBack() {
      history.back();
    }
  }
};
</script>

<style>
</style>
