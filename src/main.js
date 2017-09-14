var vue = require('vue');//加载vue 
var vueRouter = require('vue-router'); //加载路由插件
var http = require('vue-resource');
var routerConfig = require('./router-config');

var App = require('./App');
//使用插件
vue.use(vueRouter);
vue.use(http);

//配置路由

var router = new vueRouter({
	//配置
});

//执行配置
routerConfig(router);


//启动路由
router.start(App,"#app");
