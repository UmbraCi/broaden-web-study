/**
 * lodash的flow函数和尝试模拟
 * flow:创建一个函数。 返回的结果是调用提供函数的结果，this 会绑定到创建函数。 每一个连续调用，传入的参数都是前一个函数返回的结果。
 * flowRight:这个方法类似_.flow，除了它调用函数的顺序是从右往左的。
 */

const reverse = arr => arr.reverse()
const first = arr => arr[0]
const toUpper = s => s.toUpperCase()

const _ = require("lodash")
const f = _.flowRight(toUpper,first,reverse)
console.log(f(['one','two','three']))

//尝试模拟flowRight方法
const flowRight = function(...args){
    //传入了n个函数  args[]
    //返回一个函数
    return function(val){
        return args.reverse().reduce((acc,cur)=>{
            return cur(acc)
        },val)
    }
}

const fn = flowRight(toUpper,first,reverse)
console.log(fn(['one','two','three']))