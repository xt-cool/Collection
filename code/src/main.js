import Vue from 'vue'
import App from './App.vue';
import router from './router'
import store from './store'
import './registerServiceWorker'
import './assets/style/common.scss'

// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// font_icon
import './assets/img/font_icon/iconfont.css'

// highlinght 代码高亮插件
import './plugins/highlight'

Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
