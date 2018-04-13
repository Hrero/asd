// var a = 100;
// console.log(a);
// var ad = new Date();
// console.log(ad.getFullYear())
//
//
// var arr = [1,2,3]
// arr.push(4)
// console.log(arr)
//
//
// function Person(name){
//     this.name = name;
// }
// Person.prototype.run = function(){
//     console.log(this.name)
// }
// var p = new Person('sss')
// p.run()

//node 中的顶层对象 是 node中也没有什么顶层对象
//node 的顶层对象是global
/*
一个文件就是一个模块
而且每个模块就是一个文件 一个作用域
我们是用var
 神明的变量 他是当前模块下的变量a

 */

// var a = 100;
// global.a = 200;
// console.log(a)
// console.log(global.a)
// console.log(__filename) //文件的路径

/*
模块加载系统
绝对路径
模块加载机制

不加点的 会加载核心模块
或者是module模块的
 */

require('./2');








