## require 
> require 是commonjs规范中的语法，有几个特点；
1. require方法是同步的，内部执行的是 readFileSync；
2. require方法的返回值 是 module.exports 对象；
3. 模块的 exports和module.exports引用的是一个对象；
4. 在node中循环引用的解决方法是 不使用循环引用，而是新建一个公共的模块；
