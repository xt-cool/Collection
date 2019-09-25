<template>
  <div class="tree-container">
    <el-tree 
      :data="data" 
      :props="defaultProps" 
      node-key="id"
      :default-expanded-keys="[1]"
      icon-class="iconfont"
      highlight-current
      @node-click="nodeClick">
    </el-tree>
  </div>
</template>

<script>
export default {
  name: 'TreeComponent',
  data () {
    return {
      data: [{
        id: 1,
        label: '中国移动广东广州分部',
        children: [
        {
          label: '董事会',
          children: [
            {
              label: '三级 1-1-1',
              disabled: true
            },
            {
              label: '三级 1-1-2',
              disabled: false
            },
            
          ]
        },
        {
          label: '助理办公室',
          children: [{
            label: '三级1-2-1'
          }]
        },
        {
          label: '后勤中心',
          children: [
            {
              label: '王老板',
              disabled: true
            },
            {
              label: '某员工',
              disabled: false
            },
            {
              label: '财务部',
              children: [
                {
                  label: '四级1-3-1',
                }
              ]
            },
            {
              label: '人力资源部',
              children: [
                {
                  label: '四级1-3-2',
                }
              ]
            }
          ]
        }
        ]
      
      }],
      defaultProps: {
        children: 'children',
        label: 'label'
      }
    }
  },
  methods: {
    nodeClick(node) {
      console.log('node...', node);
    }
  }
}
</script>
<style lang="scss">
.tree-container {
  $--active-font-color: rgb(65, 154, 254);
  $--folder-color: rgb(31, 159, 225);
  $more-folder-icon: '\E830';
  $open-folder-icon: '\E683';
  $boss-icon: '\E619';
  $staff-icon: "\E60F";

  .el-tree {
    color: #000;
    .el-tree-node__label {
      font-size: 12px;
    }
    .el-tree-node__content:hover {
      background-color: rgb(242, 253,	255);
      transition: background-color .2s linear;
    }
    // 未打开
    .iconfont::before {
      content: $more-folder-icon;
      color: $--folder-color;  
      font-size: 14px;
    }
    // 已打开
    .expanded {
      transform: rotateY(0deg);
      &::before{
        content: $open-folder-icon;
      }
    }
    // 叶子🍃节点-员工
    .is-leaf {
      &::before{
        content: $staff-icon;
      }
    }
    // 叶子🍃节点-老板
    .el-tree-node[aria-disabled=true] .is-leaf {
      &::before{
        content: $boss-icon;
      }
    }
  }
  .el-tree--highlight-current .el-tree-node.is-current>.el-tree-node__content {
    color: $--active-font-color;
    background-color: #fff;
    transition: color .2s linear;
  }
}
</style>