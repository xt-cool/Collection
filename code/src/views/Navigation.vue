<template>
  <div class="nav-container">
    <el-radio-group class="radio-group" v-model="isCollapse" >
      <el-radio-button :label="true">收起</el-radio-button>
      <el-radio-button :label="false">展开</el-radio-button>
    </el-radio-group>
    <el-menu 
      default-active="/Tree" 
      class="el-menu-vertical-demo" 
      router
      @open="handleOpen" 
      @close="handleClose" 
      :collapse="isCollapse">
      <vue-component-nav></vue-component-nav>
      <css-component-nav></css-component-nav>
      <animation-nav></animation-nav>
      <javascript-nav></javascript-nav>
    </el-menu>
  </div>
</template>

<script>
import VueComponentNav from '../Collections/VueComponent/Nav'
import CssComponentNav from '../Collections/CssComponent/Nav'
import AnimationNav from '../Collections/Animation/Nav'
import JavascriptNav from '../Collections/JavaScript/Nav'
  export default {
    name: 'Navigation',
    components: {
      VueComponentNav,
      CssComponentNav,
      AnimationNav,
      JavascriptNav
    },
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>
<style lang="scss">
.nav-container {
  text-align: left;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }
  .el-radio-group {
    margin: 15px 10px;
    .el-radio-button__inner {
      width: 40px;
      height: 30px;
      line-height: 30px;
      padding: 0;
      font-size: 13px;
    }
  }
}
</style>