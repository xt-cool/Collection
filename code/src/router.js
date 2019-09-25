import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Tree from './Collections/VueComponent/fileTree/index.vue'

Vue.use(Router)

const jiarong = [
  {
    path: '/Tree',
    name: 'Tree',
    component: Tree
  },
];


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        ...jiarong,
      
      ]
    },
  ]
})
