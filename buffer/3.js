var bf = new Buffer('miaov');
console.log(bf)
// console.log(bf.toString('utf-8',1,3));
//
// var bf2 = new Buffer('苗伟');
//
// console.log(bf2)
//
// console.log(bf2.toString('utf-8',1))
// var bf3 = bf.slice(2)
// console.log(bf.slice(2))
var bf4 = new Buffer(10);
// bf.copy(bf4);
// console.log(bf4)
//
// bf4[0] = 2;
// console.log(bf4)
// console.log(bf)
//拷贝字符串  老对象拷贝到的位置 新的
bf.copy(bf4,1,2,4);
console.log(bf4)
