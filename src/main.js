// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
/* jquery */


import 'jquery/dist/jquery.min'
 
import 'bootstrap/dist/css/bootstrap.css'
/* 路由 */
import router from './router'

/* axios */
import axios from './api'
import api from './api/api'
Vue.prototype.http = axios;
Vue.prototype.api = api;

import 'swiper/dist/css/swiper.min.css';

import 'bootstrap'


/* swiper */
// import 'swiper/dist/css/swiper.min.css';

/* 重置样式 */
import './assets/css/reset.min.css'

/* bootstarp */
 import './assets/css/bootstrap.min.css'


/* animate.css */
import animated from 'animate.css'

 
/* 头部组件 */
import Header from './components/Header'
Vue.component(Header.name,Header)
import BaiduMap from 'vue-baidu-map'

Vue.use(animated)

/* 尾部组件 */
import Footer from './components/Footer'
Vue.component(Footer.name,Footer)

/* 回到顶部 */
import GoTop from './components/GoTop'
Vue.component(GoTop.name,GoTop)

Vue.config.productionTip = false


router.beforeEach((to, from, next) => {
    if(to.meta.title){
      document.title = to.meta.title
    }
    next();
});



Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: 'fZ8WORpQRgYHyS0VQuTsPhQB10kjc0df'
})


new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
