//引入vue
import Vue from 'vue';
import App from './app.vue';
//创建一个vue实例
new Vue({
	el:'#app',
	render:function(creater){
		return creater(App);
	}
})
