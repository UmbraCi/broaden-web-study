/**
 * 可缓存：因为纯函数对相同的输入始终有相同的结果，所以可以把纯函数的结果缓存起来 
 * 可测试
 * 并行处理（不访问共享内存）       可以在web Worker中并行处理 
 */


//lodash中的记忆函数
const _ = require('lodash')

function getArea(r){
    console.log(r)
    return Math.PI * r * r
}

// let getAreaWithMemory = _.memoize(getArea)
// console.log(getAreaWithMemory(4))
// console.log(getAreaWithMemory(4))       //并没有打印r       证明直接从缓存取的面积
// console.log(getAreaWithMemory(4))

function memoize(fn){
    const cache = {}
    return function(){
        let key = JSON.stringify(arguments)
        cache[key] = cache[key] || fn.apply(fn,arguments)
        return cache[key]
    }
}

let getAreaWithMemory = memoize(getArea)
console.log(getAreaWithMemory(4))
console.log(getAreaWithMemory(4))       //并没有打印r       证明直接从缓存取的面积
console.log(getAreaWithMemory(4))