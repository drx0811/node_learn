const assert = require('assert').strict;

(function assertFunc() {
    // assert(true,"测试assert 第一个应用");// assert 的第一个参数是我们要判断的值，如果为false的话则会把第二个值报错出来
    // assert.ok(true,'同assert的第一个用法');// assert.ok的用法和assert的用法一样
})();


(function equalFunc() {

    // assert的equal用法，我们最好使用    严格模式；如： deepStrictEqual 
    const obj1 = {
        height: 1
    }
    const obj2 = {
        height: 2
    }
    const obj3 = {
        height: 1
    }
    const obj4 = Object.create(obj1);
    const o1 = {};
    const o2 = {};
    Object.setPrototypeOf(o2, Date.prototype);
    // console.log('o2 :>> ', o2);
    // console.log('o1 :>> ', o1);
    // assert.deepStrictEqual(obj1,obj2,"当obj1和obj2不相同的时候回报错")
    // assert.deepStrictEqual(obj1,obj4,'所有的比较都不会去比较prototype上面的属性')
    // assert.strictEqual(obj4,obj2,'对象浅层的比较');//
    // assert.strictEqual(o1,o2,'对象的原型不同也不可以');//
})();





// assert.fail('发生错误了');// 只要发生错误了，后面的内容就不会执行了；
// assert.fail(new TypeError("发生错误了又一次"));//

// ifError 只有传递的是null或者undefined的时候才会执行；否则报错；
// assert.ifError(null);
// assert.ifError(0)
// assert.ifError("")

/**
 * 
 * @param {*} 只有传递的是null或者undefined的时候才会执行；否则报错； 
 * @param {*} callabck 
 */
// function sayHello(name,callabck){
//     let error='hello不行大写';
//     let str=`${name},word`;
//     callabck(error,str)
// }
// sayHello('Hello',function(error,data){
//     assert.ifError(error);
//     console.log('data :>> ', data);
// })
// assert.throw();

/**
 * assert.throws 第一个参数是一个函数，这个函数必须使用throw 才可以，
 * 
 */
(function assertThrow() {
    // assert.throws(
    //     function () {// 第一个函数可以throw一个error，或者TypeError，，但是第二个函数必须使用Error接收才可以；
    //         throw new TypeError('粗我')
    //     },
    //     Error,
    //     '不符合期望的错'
    // )
    // assert.throws(// 第一个函数使用return 报错；
    //     function(){
    //         return new TypeError('粗我')
    //     },
    //     Error,
    //     '不符合期望的错'
    // )
    // assert.throws(// 
    //     function () {
    //         throw "111"
    //     },
    //     /\d+/,// 我们可以使用正则去校验
    //     '错误了吧'
    // )
})();

// (function doseNotThrowFunc(){
//     // 作用和人throw正好相反
//     assert.doesNotThrow(
//         function (){
//            throw 'values'
//         },
//         /value/,
//         'try'
//     )
// })()

















