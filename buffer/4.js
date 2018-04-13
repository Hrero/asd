
/*
判断是否支持

 */
// console.log(Buffer.isEncoding('utf-8'))

// var arr = [1,2,3];
// var bf = new Buffer(10);

// console.log(Buffer.isBuffer(arr))
// console.log(Buffer.isBuffer(bf))


// var str1 = 'miaov';

// console.log(str1.length)
// console.log(Buffer.byteLength(str1))

// var str2 = '苗伟';
// var str1 = 'miaov';
// //console.log(str2.length)
// //console.log(Buffer.byteLength(str2))
// var list = [new Buffer(str1),new Buffer(str2)];
//
//
// // console.log(list)
//
// var bf = Buffer.concat(list);
// console.log(bf)

process.stdout.write('亲输入内容：')

process.stdin.resume();

process.stdin.on('data',function (chunk) {
    //console.log(chunk.toString())
    console.log('输入的内同是：'+chunk)
})





