/*
全局对象 返回的是当前程序运行的进程的访问可控制 提供了许多方法操作


 */

// console.log(process.argv)
// console.log(process.env)
// console.log(process.pid)
// console.log(process.cwd)


// setTimeout(function () {
//     process.exit();  //退出当前程序
// },5000)
/*
io标准输入输出流
输入设备 计算器
输出设备 显示器
 */


// console.log()
// function log(data) {
//     process.stdout.write(data)  //输出流
//
// }
// log('hello')
//适用于坚挺用户的输入数据
//默认情况下 输入流是关闭的，要坚挺处理输入流数据首先要开启输入流
// process.stdin.resume();


// / process.stdin.on('data',function (chunk) {
// console.log('用户输入了:'+chunk );
// });

// var a;
// var b;
// process.stdout.write('请输入a的数值：')
// process.stdin.on('data',function (chunk) {
//     console.log('用户输入了:'+chunk );
//
//     if(!a){
//         a = Number(chunk);
//         process.stdout.write('请输入b得知：')
//     }else{
//         b = Number(chunk);
//
//         process.stdout.write('结果是：'+a + b);
//
//     }
//
//
// });





