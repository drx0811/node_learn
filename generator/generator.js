
/**
 * generator函数是一个生成器， 所有的生成器都带有遍历器，所有的遍历器都是数组和类数组的特性；
 * 可遍历的东西，1.索引，2.长度；
 * 对于遍历器：主要是通过for of ；而for in 是用来遍历对象的；
 */
function * runFn(){
    yield 1;
    yield 2;
    yield 3;
}
const res=runFn();
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());
console.log(res.next());

