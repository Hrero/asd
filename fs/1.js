// var fs = require('fs');

/*
*fs.open(path,flags,[mode],callback)
* path 打开文件的路径
* flags 打开文件的方式 读 写
* mode 设置文件的模式 读 写 和 执行 三个 4/2/1 0777
* callback 回调 文件打开之后会调用callback处理
*      err 文件打开失败的错误  如果成功的话 err为null
*      fd 被打开标识文件的 和 定时器比较像 f返回一个定时器的编号
*      作为一个标识 去操作这个文件
 */


// fs.open('1.txt','r',function(err,fd){
//     // console.log(err)
//     console.log(fd)
//
//     if( err ){
//         console.log('文件打开失败')
//     }else{
//         console.log('文件打开成功')
//     }
//
//
// })
//
// fs.open('1.txt','r',function (err,fd) {
//     console.log(fd)
// });

/*
*fs.openSync 同部的操作  按照代码顺序去执行就行了
*fs.open 异不的操作
 */
var fs = require('fs');

// fs.open('1.txt','r',function (err,fd) {
//     console.log(err)
// })
//
// console.log('ok')

// var fd = fs.openSync('1.txt','r');
//
// console.log(fd)

fs.open('1.txt','r+',function (err,fd) {
    if(err){
        console.log('文件打开失败')
    } else {
      //读取文件
        /* r+ 读写的方式打开文件
        * fd 通过open成功打开一个文件的返回编号读取
        * buffer 前面的一个对象新的
        * offset 位置新的
        * length 长度
        * position 读取文件的位置
        * callback
        *         err:报错的
        *         length:长度
        *         newBf:新的buf
         */
      //   var bf1 = new Buffer('123456789')
      //   var bf2 = new Buffer('abcd')
      //   // console.log(bf1,bf2)
      // fs.read(fd ,bf1,0,4,null,function (err,length,newBf) {
      //     console.log(newBf)
      // })
       /*


       *fs.write(fd,buffer,offset,length[,position],callback)
       * fd:打开的文件
       * buffer 要写入的数据
       * offset buffer对象要写入的长度
       * position fd中的起始位置
       * callback 回调
       *
        */
        if(err){
            console.log('文件打开失败')

        } else {
            var bf = new Buffer('123')
            fs.write(fd,'1234',5,'utf-8',function(){
                console.log(arguments)
            })
            
            fs.close(fd,function () {

            })
        }

    }
})

