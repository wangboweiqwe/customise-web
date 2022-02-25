var express = require('express');
var cookieParser = require('cookie-parser');
var session = require('express-session');

var app = express();
app.use(cookieParser('sessiontest'));
app.use(session({
  secret: 'sessiontest',//与cookieParser中的一致
  resave: true,
  saveUninitialized:true
}));
// 写入session
app.get('/index', function (req, res) {
       req.session.user="LI Wei";
       res.send('<p>get session</p>')
})
// 读取session
app.get('/user', function (req, res) {
 
    if(req.session.id){
        let { user } = req.session;
        res.send('你好'+user+'，欢迎来到我的家园。');
       }else{
        res.send('你还没有登录，先登录下再试试！');
       }
})
 
var server = app.listen(8081, function () {
 
  var host = server.address().address
  var port = server.address().port
 
  console.log("访问地址为 http://%s:%s", host, port)
 
})