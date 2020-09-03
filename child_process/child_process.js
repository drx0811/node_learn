const { spawn, exec, execFile, fork } = require("child_process");
const assert = require('assert').strict;

/**
 * 
 * 我们能用spawn的时候就不要再用execFile了；
 */


(function callback() {
    // 通过回调函数的形式；
    // exec('ls ./', (err, stdout, stderr) => {// exec 执行shell命令
    //     assert.ifError(err)
    //     console.log(stdout);
    //     console.log('stderr :>> ', stderr);
    // })
})();



(function () {
    // 通过流的形式进行调用
    // const streams = exec('ls ./')
    // streams.stdout.on('data', chunk => {
    //     console.log(chunk)
    // });
})();


(function promiseFunc() {
    // 通过promise的形式进行调用
    // const util = require('util')
    // const exec2 = util.promisify(exec)
    // exec2('ls ./').then(res => {
    //     console.log(res.stdout)
    // })
})();


(function execFileFunc() {
    /**
     * execFile 的参数必须是一个数组；
     * 
     */
    // execFile('ls',['../'],(err,stdout)=>{
    //     assert.ifError(err)
    //     console.log('stdout :>> ', stdout);
    // })
})();



(function spawnFunc() {
    /**
     * spawn 的用法要用流的方式，
     * spawn 没有回调函数的形式
     */
    // const streams1=spawn('ls',['../']);
    // streams1.stdout.on('data',chunk=>{
    //     console.log('chunk :>> ', chunk.toString());
    // })
})();


(function forkFunc() {
    // 可以进行通信 fork可以直接饮用到 一个文件 可以接受该文件输送过来的数据；
    const forks = fork('./111.js',{
        silent: true
    });
    forks.on('message', data => {
        console.log('data :>> ', data);
    });
    forks.send('11111')
})();



(function spawnFn() {
    /**
     * stdout.on 接收只有data，close；不能乱用别的
     */
    // const lss = spawn('ls', ['-lh', '../']);
    // lss.stdout.on('data', data => {
    //     console.log('data :>> ', data.toString());
    // });
    // lss.stdout.on('ddd',data=>{// ddd 不可以
    //     console.log('data :>> ', data);
    // });
    // lss.on('close',data=>{// 直接返回false
    //     console.log('data.toString() :>> ', data);
    // }); 
})();

// exec('ls',(err,stdout,stderror)=>{
//     if (err) {
//         console.log('err :>> ', err);
//     }
//     console.log('stdout :>> ', stdout);
//     console.log('stderror :>> ', stderror);
// })
