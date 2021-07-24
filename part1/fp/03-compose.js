/**
 * 函数组合
 */
//简化版实现
const compose = (f,g)=>{
    return function(x){
        return f(g(x))
    }
}

const f = x => x + 1
const g = x => x * 2
const fg = compose(f,g)
// console.log(fg(2))

//尝试一下更高级的，支持多个函数组合        compose(f, g, t) => x => f(g(t(x))
const seniorCompose = function(...fnArg){
    //传入多个函数fnArg组成的数组
    return function(x){
        return fnArg.reduce((acc,cur)=>{
            return cur(acc)
        },x)
    }
}

const reverse = arr => arr.reverse()
const first = arr => arr[0]
const toUpper = s => s.toUpperCase()


const fn = seniorCompose(reverse,first,toUpper)
console.log(fn(['one','two','three']))

const fn2 = seniorCompose(reverse,first)
console.log(fn2(['one','two','three']))