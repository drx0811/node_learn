const com = require('./component.js')
setTimeout(() => {
    console.log('com :>> ', com);
}, 2000)

/**
 * 执行一个字符创的方法：eval，new Function();
 * 1.eval()：会向上查找作用域，导致变量混乱
 * 
 * 2.new Function()
 * let res=new Function('a','b','console.log(a+b)')
 * res(1,2);
 * 
 
 * 
 * 
 * 
 */
// node 中的模块分为三种：1.核心模块，fs，path，util，2.node的自定义模块，通过‘../  ./’引入；3。第三方模块；

//3.node中使用的是自己的核心模块，不是new Function 是自已的虚拟机模块；vm模块；
const vm = require('vm')
let q = 1;
vm.runInThisContext('console.log(100)');

// path模块，方法有 join，resolve，dirname，extname  
const path = require('path')
let my_path = path.join(__dirname, 'drx.txt')
console.log(my_path);

//path.resolve();会解析出来一个绝对路径；当前项目的绝对路径；---->是process.cwd()的路径；

console.log('path.resolve() :>> ', path.resolve());
console.log('process.cwd() :>> ', process.cwd());
//但是resolve有一个问题就是遇到 / 会解析出来跟路径；
let my_path_new = path.resolve(__dirname, 'my.txt', '/');
console.log('my_path_new :>> ', my_path_new);
// extname;解析出文件的扩展名
let my_extname = path.extname('muy.txt')
console.log(my_extname);

/**
 * node 调试三种方法，1，在chrome中调试，通过命令 node --inspect-brk 文件名；
 * 2.在编辑器中调试 
 * 
 * 
 */
