/*
*搭建一个服务器用于处理 http 请求
* 需要用node的提供一个模块http
* 端口 网卡大通道 端口属于份机器
 */

var http = require('http');

var server = http.createServer();

server.on('error',function (err) {
    console.log(err)
})
server.on('listening',function () {
    console.log('listening..')
})

server.on('request',function (req,res) {
    console.log('有请求了')
    // console.log(req)
    // res.setTimeout(2000,function () {
    //     // console.log('请求超时')
    //
    //     res.setHeader("Content-Type","text/html");
    //     res.write("<html><head><meta charset='utf-8' /></head>");
    //     res.write("请求超时");
    //     res.end();
    //
    // })
    // setTimeout(function(){
    //     res.setHeader("Content-Type","text/html");
    //     res.write("<html><head><meta charset='utf-8' /></head>");
    //     res.write("你好");
    //     res.end();
    // },2000);
    res.write('hello')
    res.end()
})

server.listen(8080,'localhost');
// console.log(server.address())