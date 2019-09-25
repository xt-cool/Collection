<template>
  <div class="home-container">
    <Navigation class="nav"></Navigation>
    <router-view class="content"></router-view>
    <aside class="right-side">广告位招租</aside>
  </div>
</template>
<script>
import Navigation from './Navigation';

export default {
  name: 'App',
  components: { Navigation },
}
</script>
<style lang="scss" scoped>
.home-container {
  display: flex;
  flex-flow: row nowrap;
  .content {
    flex: 1;
    margin-left: 10px;
  }
  .right-side {
    width: 200px;
    color: crimson;
    padding: 10px;
  }
}

</style>
