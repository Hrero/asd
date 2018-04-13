//应用程序的启动入口文件
//加载express模块
var express = require('express');
//加载模板
var swig = require('swig');
var mongoose = require('mongoose');
//body-parser 用于post提交过来的数据
var bodyParser = require('body-parser');
//引入cookies
var Cookies  = require('cookies');
var User = require('./models/User')
//app相当于一个服务端的对象 http.creatServer();
var app = express();

//设置静态文件托管
//当url/public开始责返回 /public下的文件
app.use('/public',express.static( __dirname + '/public'))

//定义当前的应用使用的模板隐情,第一个参数是模板隐情的名称
//同时也是莫办文件的后缀,第二个参数表示用于处理模板内容解析的方法
app.engine('html',swig.renderFile);
//第一个参数必须views,第二个是目录
app.set('views','./views');
//注册所使用的末班隐情,第一个参数必须是view engine 第二个参数必须要和模板文件的后缀要一致
app.set('view engine','html');
//在开发过程中需要取消模板缓存 //true or false
swig.setDefaults({cache:false})

app.use( bodyParser.urlencoded({extended:true}) );

//设置cookie
app.use(function (req,res,next) {
    req.cookies = new Cookies(req,res);
    //解析用户登录信息
    req.userInfo = {};
    if(req.cookies.get('userInfo')){
       try{
           req.userInfo = JSON.parse(req.cookies.get('userInfo'));
           //获取当前用户的类型
            User.findById(req.userInfo._id).then(function (userInfo) {
                req.userInfo.isAdmin = Boolean(userInfo.isAdmin);
                next();
            })
       }catch (e){
            next();
       }
    } else {
        next();
    }

})
/*
*根据不同功能划分模块
 */
app.use('/admin',require('./routers/admin'));
app.use('/api',require('./routers/api'));
app.use('/',require('./routers/main'));
mongoose.connect('mongodb://localhost:27018/blog',function (err) {
    if(err){
        console.log('数据库连接失败')
    } else {
        console.log('数据库连接成功')
        app.listen(8081);
    }
});






//首页
/*
* req 请求
* res 相应
* 接下来的函数
 */

// app.get('/',function (req,res,next) {
//     /*
//     *  读取view下的制定文件，解析并返给客户端
//     *  第一个参数L表示莫办文件，相对view目录
//     *  第二个参数传递给模板使用的数据
//      */
//    // res.send('<h1>欢迎光临我的博客</h1>')
//     res.render('index')
// })
//
// app.get('/main.css',function (req,res,next) {
//     res.setHeader('content-type','text/css');
//     res.send("body {background:red;}");
// })
//坚挺8081端口http请求


//用户发送http请求 -.解析 找到规则 找到绑定函数 返回对应内容
//静态的 public 直接读取指定目录下返回给用户
//如果是其他的动态的 加载处理业务逻辑加载模板 解析模板返回数据
