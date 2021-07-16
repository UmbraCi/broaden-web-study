//模拟memoize函数的实现
function memoize(fn){
    const cache = {}    //缓存
    return function(){
        let key  = JSON.stringify(arguments)
        cache[key] = cache[key] || fn.apply(null,arguments)
        return cache[key]
    }
}

// function fibonacci(n){
//    return  n < 2 ? n: fibonacci(n - 1) + fibonacci(n - 2)
// }
const  fibonacci = memoize(n=> n < 2 ? n: fibonacci(n - 1) + fibonacci(n - 2))

// let get_fibonacci_memoize = memoize(fibonacci())

console.log(fibonacci(4))

function getArea(r){
    console.log(r)
    return Math.PI * r * r
}

const getAreaWithMemory = memoize(getArea)


console.log(getAreaWithMemory(4))
console.log(getAreaWithMemory(4))
console.log(getAreaWithMemory(4))
console.log(getArea(4))
console.log(getArea(4))
console.log(getArea(4))

console.log(Math.PI)