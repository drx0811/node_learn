/**
 * 下载用Blob的方式，创建Bolb的实例第一个参数必须是一个字符串的数组，第二参数是一个类型的对象；
 * 下载可以创建a标签的形式，我们给a标签添加download属性，并设置下载后的文件的名称；
 * 我们可以 通过 URL.createObjectURL方法将blob或者file对象做为参数进行下载；
 *  revokeObjectURL 可以把创建的URL.createObjectURL对象释放内存；
 */
function download() {
    let str = `<h2>下载内容</h2>`
    let blob = new Blob([str], {
        type: 'text/html'
    });
    let a_element = document.createElement("a");
    a_element.setAttribute('download', 'drx.html');
    a_element.href = URL.createObjectURL(blob)
    a_element.click();
}
// download();


let file = document.getElementById('file');

function getFiles() {
    file.addEventListener('change', e => {
        let files = e.target.files[0];
        let img = new Image();
        img.src = URL.createObjectURL(files);
        img.onload = function () {
            document.body.append(img)
            URL.revokeObjectURL(img.src)
        }
    })
}
function getFile() {
    file.addEventListener('change', e => {
        let files = e.target.files[0];
        let fileReader = new FileReader();
        fileReader.onload = function () {
            let img = new Image();
            img.src = fileReader.result;
            document.body.append(img)
        }
        fileReader.readAsDataURL(files);
    })
}

