 setTimeout(() => {
     process.send({name:111})
 }, 3000);
 process.on('message',m=>{
     console.log('m :>> ', m);
 })