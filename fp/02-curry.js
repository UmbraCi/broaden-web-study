/**
 * 加工站——柯里化
 */

//我们尝试写一个 curry 版本的 add 函数
function add (x){
    return function(y){
        return x + y
    }
}
const increment = add(1)
console.log(increment(10))
// 柯里化   f(a,b,c) → f(a)(b)(c)
// 部分函数调用     f(a,b,c) → f(a)(b,c) / f(a,b)(c)