//引入vue
import Vue from 'vue';
import ElementUI from 'element-ui';
import VueRouter from 'vue-router';
import 'element-ui/lib/theme-chalk/index.css';
import App from './app.vue';
import Fourcategory from './components/fourcategory.vue';
import NotFound from './components/notFount.vue';
import User from './components/user.vue';
Vue.use(ElementUI);
//安装插件
Vue.use(VueRouter);

//创建路由对象配置路由规则
let router = new VueRouter();
router.addRoutes([
    //重定向
    // { path: '/', redirect: '/home' },
    // { path: '/home', component: Home }
    { path: '/', redirect: { name: 'user' } },
    { name: 'home', path: '/home', component: Fourcategory },
    { name: 'user', path: '/user', component: User },
    // 最终无法匹配 -> 404
    { path: '*', component: NotFound }

]);
//创建一个vue实例
new Vue({
	el:'#app',
	router,
	render:function(creater){
		return creater(App);
	}
})
