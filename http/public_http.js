const http=require('http')
const url=require('url')
const path=require('path')
const fs=require('fs')
let port=3003;
const server=http.createServer();
server.on('request',(req,res)=>{
    const {pathname}=url.parse(req.url);
    // path.join 可以连接两个地址，resolve最好不要用，有时候会转为根路径；
    const filePath=path.join(__dirname,pathname);
    console.log('filePath :>> ', filePath);
    let sendToClient="";
    // node 是单线程，当我们请求一个运算量超大时，会阻塞我们的进程，如果要解决这种并发我们有两种方法；
    // 1. 使用集群；
    // 2. 使用子进程；
    if (pathname==='/sum') {
        let sum=1000000000;
        let num=0;
        for (let index = 0; index < sum; index++) {
            num+=index;
        }
        sendToClient=num+""
    } else {
        sendToClient="谢谢你"
    }
    res.setHeader('content-Type','text/html;charset=utf8');
    // 返回的可写流肯定    字符串或者buffer 
    res.end(sendToClient)

});
server.listen(port,()=>{
    console.log(`程序已经在${port}端口运行中`);
});
server.on('error',(err,data)=>{
    if (err.code === 'EADDRINUSE') {
        ++port;
        server.listen(port, () => {
            console.log(`node服务器已经在端口${port}上运行中。。。`)
        })
    }

})