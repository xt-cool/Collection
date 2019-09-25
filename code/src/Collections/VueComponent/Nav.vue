<template>
  <el-submenu index="1">
    <template slot="title">
      <i class="el-icon-location"></i>
      <span slot="title">VueComponent</span>
    </template>
    <el-menu-item-group>
      <span slot="title">jiarong</span>
      <el-menu-item index="/Tree">树型组织架构</el-menu-item>
      <el-menu-item index="1-2">组件2</el-menu-item>
    </el-menu-item-group>
    <el-menu-item-group>
      <span slot="title">junjian</span>
      <el-menu-item index="1-3">组件1</el-menu-item>
      <el-menu-item index="1-4">组件2</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
</template>
<script>
export default {
  
}
</script>
<style lang="scss" scoped>
  
</style>