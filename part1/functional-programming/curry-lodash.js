/**
 * 利用lodash.js中的curry方法使函数柯里化
 */

const _ = require('lodash')

//柯里化案例
// ''.match(/\s+/g)         //匹配空字符
// ''.match(/\d+/g)         //匹配数字

const match = _.curry((reg,str)=>{
    return str.match(reg)
})

const haveSpace = match(/\s+/g)
const haveNumber = match(/\d+/g)

// console.log(haveSpace('hello world'))
// console.log(haveSpace('helloWorld'))
// console.log(haveNumber('hello123'))
// console.log(haveNumber('hello'))

const filter = _.curry((fn,arr)=>{
    return arr.filter(fn)
})

const findSpace = filter(haveSpace)
console.log(findSpace(['marry me','fuckYOU']))
const findNumber = filter(haveNumber)
console.log(findNumber(['123hello','run out of way']))

