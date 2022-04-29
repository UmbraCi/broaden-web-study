const myTransform = require('./myTransform.js')

let ts = new myTransform()

let str1 = "拉钩教育"


let encodeBuf = ts.encode(str1,1)

let a = ts.decode(encodeBuf)

console.log(a)

console.log(ts.getPackageLen(encodeBuf))