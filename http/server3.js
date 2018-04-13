var http = require('http');

var url = require('url');
var fs = require('fs');
var qs = require('querystring')
var server = http.createServer()
// console.log(__dirname)
var HtmlDit = __dirname + '/html/'


server.on('request',function (req,res) {
    var urlstring = url.parse(req.url);
    switch (urlstring.pathname){
        case  '/':
            //首页
            sendData( HtmlDit + 'index.html',req,res )
            break;
        case  '/user':
            //用户页
            sendData( HtmlDit + 'user.html',req,res )
            break;
        case  '/login':
            //用户页
            sendData( HtmlDit + 'login.html',req,res )
            break;
        case  '/login/check':
            // console.log(req.method);
            //console.log( qs.parse(urlstring.query) )
            var str = '';
            if( req.method.toUpperCase() == 'POST' ){
                req.on('data',function (chunk) {
                    str += chunk;
                })
                req.on('end',function () {
                    console.log(str)
                    console.log(qs.parse(str))
                })

            }

            break;
        default:
            //其他
            break;
    }
})

function sendData(file,req,res) {
    fs.readFile(file,function (err,data) {
        if( err ){
            res.writeHead(404,{
                'content-type':'text/html;charset=utf-8'
            })
            res.end('<h1>页面呗吃掉了</h1>')
        } else {
            res.writeHead(200,{
                'content-type':'text/html;charset=utf-8'
            })
            res.end(data)
        }
    })
}

server.listen(8080,'localhost')