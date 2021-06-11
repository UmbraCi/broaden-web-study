/**
 * 函数的柯里化：
 * 当一个函数有多个参数的时候，先传递一部分参数调用它（这部分参数后永远不变）
 * 然后返回一个形函数接受剩余参数，运行这个返回的函数返回结果
 */

// function checkAge(min){
//     return function(age){
//         return age >= min
//     }
// }

//ES6写法
function checkAge(min){
    return age=>age >= min
}


let checkAge18 = checkAge(18)
let checkAge25 = checkAge(25)


console.log(checkAge18(17))
console.log(checkAge18(18))

console.log(checkAge25(24))
console.log(checkAge25(27))
