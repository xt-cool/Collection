<template>
  <div class="file-tree-container">
    <p>树形组织架构</p>
    <file-tree></file-tree>
    <div class="description">
      <p>
        1. 这是一个对已有的 element-UI 组件的修改版本🤣。采用文件夹图标代替了 element 原本的箭头 ➡️ 图标，
        对不同的角色采用不同的图标区分。更多 API 请参考 element-ui。
    <x-code>
    // 用法
    因为涉及到图标的修改，建议是对 fileTree.vue 文件采用 Ctrl-C + Ctrl-V 用法。   
    </x-code>
        2. 这里使用的图标都是字体图标，在引用组件之前，同时需要把 src/img/font_icon/iconfont.css 在 main.js 导入。 
    <x-code>
    // main.js
    import './assets/img/font_icon/iconfont.css'
    </x-code>
        3. 如果要对图标进行修改，则需要图标的字体编码，然后来代替 fileTree.vue 中以下变量即可。
    <x-code>
    // fileTree.vue
    $--active-font-color: rgb(65, 154, 254);       // 选中项的字体颜色
    $--folder-color: rgb(31, 159, 225);            // 图标颜色
    $more-folder-icon: '\E830';                    // 未打开的 folder 图标
    $open-folder-icon: '\E683';                    // 已打开的 folder 图标
    $boss-icon: '\E619';                           // 领导图标
    $staff-icon: "\E60F";                          // 员工图标
    </x-code>
        4. 在 fileTree.vue 的 data 数据中，disabled：true 的那一项所对应的图标是领导图标，若为 false 或 不定义 disabled 的值，
        则对应的图标为员工图标。
    <x-code>
    {
      label: '王老板',
      disabled: true
    },
    {
      label: '某员工',
      disabled: false
    }
    </x-code>
        ps: 这个是一个简单的示例，还可以有更好的介绍方式😂
      </p>
    </div>
  </div>
</template>
<script>
import fileTree from './fileTree.vue'
import xCode from '../../../components/xCode';
export default {
  name: 'Tree',
  components: { fileTree, xCode },
}
</script>
<style lang="scss" scoped>
.description {
  text-align: left;
  margin-top: 50px;
  padding: 10px;
  border-radius: 4px;
  font-size: 14px;
  
  background: #eee;
}
</style>