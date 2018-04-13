var fs = require('fs');

// var filename = '2.txt';
// fs.watch(filename,function (ev,fn) {
//     console.log(ev);
//
//     if(fn){
//         console.log(fn+'gaile')
//     }
//
// })
//
// fs.mkdir('./1',function () {
//     // console.log(arguments)
// })
//
// fs.rmdir('./1',function () {
//     console.log(arguments)
// })

// fs.readdir('./',function (err,fileList) {
//     // console.log(fileList)
//
//     fileList.forEach(function (t) {
//         fs.stat(t,function (err,info) {
//             // console.log(arguments)
//
//             switch (info.mode){
//                 case  16822:
//                     console.log('文件夹'+ t)
//                     break;
//                 case  33206:
//                     console.log('文件'+t);
//                     break;
//             }
//
//         })
//     })
//
//
// })