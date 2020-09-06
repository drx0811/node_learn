let http = require('http');
const url=require('url')
const server = http.createServer((req, res) => {
    console.log(req.method);
    // console.log(url.parse(req.url));
    console.log(url.parse(req.url,true));// 添加true可以把serch转变为对象的形式；

    //req是一个可读流，如果客户端发送的数据量很大，我们可以使用buffer的形式； 
    const arr=[];
    req.on('data',(chunk)=>{// 只有含有请求体的是后才会出触发data的监听，
        console.log(chunk);
        arr.push(chunk)
    })
    req.on('end',()=>{// 不管是何种请求都会出阿发end的监听；
        let strings=Buffer.concat(arr).toString()
        console.log('strings :>> ', strings);
    });
    res.setHeader('content-Type','text/html;charset=utf8')
    res.end('结束了')// 
});

/**
 * 对于请求体，我们也可以通过用on监听request；
 */
// const server1=http.createServer();
// server1.on('request',()=>{
//     // 处理请求体的逻辑；
// })



let port = 3000;
server.listen(port, () => {
    console.log(`node服务器已经在端口${port}上运行中。。。`)
})
// 监听错误信息，当端口占用的时候我们可以更改端口号
server.on('error', (err, data) => {
    if (err.code === 'EADDRINUSE') {
        ++port;
        server.listen(port, () => {
            console.log(`node服务器已经在端口${port}上运行中。。。`)
        })
    }
}) 