<template>
  <div id="app">
    <router-view/>
    <router-view name="tabBar"></router-view>
  </div>
</template>

<script>
import './assets/style/common.css';

export default {
  name: 'app',
}
</script>


