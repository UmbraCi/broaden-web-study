/**
 * 尝试模拟实现lodash的curry函数
 */

//先尝试使用一下lodash的柯里化函数
const _ = require('lodash')

function getSum(a,b,c){
    return a+b+c;
}

// const curried = _.curry(getSum)

// console.log(curried(1,2,3))
// console.log(curried(1)(2,3))
// console.log(curried(1,2)(3))

//开始模拟
function curry(fn){
    //返回的函数有多种参数调用情况
    return function(...args){
        if(args.length < fn.length){
            //实参小于形参
            return function(){
                return fn(...(args.concat(Array.from(arguments))))
            }
        }
        //实参大于等于形参
        return fn(...args)
    }
}

const curried = curry(getSum)

console.log(curried(1,2,3))
console.log(curried(1)(2,3))
console.log(curried(1,2)(3))