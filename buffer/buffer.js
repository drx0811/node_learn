// 分配一个长度为10的内存
// const buffer=Buffer.alloc(10);
// console.log('buffer :>> ', buffer);

// 分配一个长度为10的内存，并填充1；
// const buffer1=Buffer.alloc(10,1)
// console.log('buffer1 :>> ', buffer1);

// 分配一个长度为10的内存，但是这个内存可能会有旧值；
// const allocUnsafe=Buffer.all˚ocUnsafe(10);
// console.log('allocUnsafe :>> ', allocUnsafe);

// f通过allocUnsage分配好的内存，再通过fill进行填充；
// allocUnsafe.fill(1)
// console.log('allocUnsafe1 :>> ', allocUnsafe);

// 目前测试的write方法填充报错;
// allocUnsafe.write(1)
// console.log('allocUnsafe2 :>> ', allocUnsafe);

// 创建一个含有不同字节的buffer需要使用from来做；
// const bufferFrom = Buffer.from([1,2,3])
// console.log('bufferFrom :>> ', bufferFrom);

// const bufferFrom1= Buffer.from('test1')
// console.log('bufferFrom1 :>> ', bufferFrom1);
// console.log('bufferFrom1.toString() :>> ', bufferFrom1.toString());

// const bufferFrom3= Buffer.from('a')
// console.log('bufferFrom3.toString() :>> ', bufferFrom3.toString());



























