使用须知：

1. 目前分类主要为 VueComponent、CssComponent、Animation 和 JavaScript，四类。在 VueComponent 文件夹中已有一个示例（包括了组件及其介绍），即 fileTree文件夹，仅供大家参考。

2. 项目内已全局引入 element-UI。使用 x-code 可使输入的代码高亮。 

   

- 如何把组件加入到项目中？

  1. 在 router.js 定义好组件的路径。
  2. 接着在相应文件夹的 Nav.vue ，写到自己的导航下，并设置路由跳转。

  ```javascript
  // index处填写 router.js 中已定义好的 path
  <el-menu-item index="/Tree">树型组织架构</el-menu-item>
  ```

  

