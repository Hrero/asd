var http = require('http');
var url = require('url');

var server = http.createServer();

//var urlString = url.parse('http://www.baidu.com:8080/a/index.html?b=2#p=1');
//console.log(urlString)
server.on('request',function (req,res) {
/*
* ?后面的东西要 query string
* 截取
 */
//    console.log(req.url)

   var urlstring = url.parse(req.url);
  //  console.log(urlstring)

    // res.writeHead(200,'success',{
    //     'content-type':'text/html;charset=utf-8'
    // })

    switch (urlstring.pathname){
        case  '/':
            //首页
            res.writeHead(200,{
                'content-type':'text/html;charset=utf-8'
            })
            res.end('<h1>这是首页</h1>')
            break;
        case  '/user':
            //用户页
            res.writeHead(200,{
                'content-type':'text/html;charset=utf-8'
            })
            res.end('<h1>用户页面</h1>')
            break;
        default:
            //其他
            res.writeHead(404,{
                'content-type':'text/html;charset=utf-8'
            })
            res.end('<h1>页面呗吃掉了</h1>')
            break;
    }

});

server.listen(8080,'localhost')