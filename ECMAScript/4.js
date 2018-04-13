var m1 = require('./5') //exports暴露
console.log(m1)



/*
另外一个模块的变量可以这样定义！
通过全局加载的方式
把变量作为global的一个属性
但是这样的做法是不推荐 的
变量暴露
使用module对象 提供当前模块的信息
module保存的提供当前模块有关的信息
在module下有一个字对象
我们可以通过子对象 把一个模块中的局部变量对外进行暴露

模块对象 exports并且他其实就是modul.exports他们的引用相等
尽量不去破坏他们的引用关系

 */


console.log(module.exports === exports)