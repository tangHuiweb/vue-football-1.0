var path = require('path')
var express = require('express')
var webpack = require('webpack')
var config = require('../config')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    colors: true,
    chunks: false
  }
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))
//这里模拟请求

app.post('/login',function(req,res){
    res.set('Access-Control-Allow-Origin', '*');
    console.log("请求成功！");
    res.json({"code":0,"msg":""}); //返回的格式也是后台告诉你的
})

app.get('/hot',function(req,res){
    res.set('Access-Control-Allow-Origin', '*');
    console.log("请求成功！");
    res.json([{'src':'../../static/img/03index_0_02.jpg','text':'小丸子啊小丸子'},
            {'src':'../../static/img/04index_06.jpg','text':'小丸子啊小丸子'},
            {'src':'../../static/img/03index_0_07.jpg','text':'小丸子啊小丸子'},
            {'src':'../../static/img/03index_0_09.jpg','text':'小丸子啊小丸子'},
            {'src':'../../static/img/04index_06.jpg','text':'小丸子啊小丸子'},
            {'src':'../../static/img/03index_0_09.jpg','text':'小丸子啊小丸子'},
            {'src':'../../static/img/04index_06.jpg','text':'小丸子啊小丸子'},
            {'src':'../../static/img/03index_0_07.jpg','text':'小丸子啊小丸子'}
            ]); //返回的格式也是后台告诉你的
})
app.get('/search',function(req,res){
  console.log("请求成功！/search");
  res.set('Access-Control-Allow-Origin', '*');
  res.json({"code":0,"src":"../../static/img/03index_0_02.jpg"})
})

app.get('/pretty',function(req,res){
    res.set('Access-Control-Allow-Origin', '*');
    console.log("请求成功pretty！");
    res.json([{'src':'../../static/img/1.jpg','text':'小丸子啊小丸子'},
            {'src':'../../static/img/2.jpg','text':'小丸子啊小丸子'},
            {'src':'../../static/img/3.jpg','text':'小丸子啊小丸子'},
            {'src':'../../static/img/4.jpg','text':'小丸子啊小丸子'},
            {'src':'../../static/img/5.jpg','text':'小丸子啊小丸子'},
            {'src':'../../static/img/6.jpg','text':'小丸子啊小丸子'},
            {'src':'../../static/img/4.jpg','text':'小丸子啊小丸子'},
            {'src':'../../static/img/3.jpg','text':'小丸子啊小丸子'}
            ]); //返回的格式也是后台告诉你的
})

module.exports = app.listen(port, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + port + '\n')
})
