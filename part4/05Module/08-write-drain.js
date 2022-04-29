const fs = require('fs')
let ws = fs.createWriteStream('test.txt',{
    highWaterMark:3
})

let flag = ws.write('1')
console.log(flag)

flag = ws.write('2')
console.log(flag)

flag = ws.write('3')
console.log(flag)