let obj={
    name:1212
};
setTimeout(()=>{
    obj.name=11;
},0)
module.exports=obj;
setTimeout(() => {
    console.log(333333);
}, 0);
let ss=Promise.resolve(11111);
ss.then(res=>{
    console.log(res);
})
console.log(222222);