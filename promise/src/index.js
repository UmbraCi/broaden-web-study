/**
 * 1.promise就是一个类。执行这个类的时候传递一个执行器进去，执行器会立即执行
 * 2.promise有三种状态，分别为 fulfilled、rejected和等待pending
 * 状态一旦确定就无法改变
 * 3.resolve和reject函数是用来更改状态的 
 * 4.then函数执行回调函数
 * 5.then成功回调和失败回调有有一个参数
 */

const MyPromise = require('./MyPromise')

let my_promise = new MyPromise((resolve,reject)=>{
    resolve("success")
    // setTimeout(() => {
    //     resolve("success")
    // }, 2000);
    // reject("fail")
})
// console.log(my_promise)
// debugger
// my_promise.then((value)=>{
//     console.log("成功1" + value)
//     return "第一个完成了"
// },(reason)=>{
//     console.log(`失败${reason}`)
// }).then((res)=>{
//     console.log(res)
//     console.log("第二个.then方法的回调")
// })
let p1 = my_promise.then((value)=>{
    console.log("第一个回调函数" + value)
    return p1
})

p1.then(res=>{
    console.log(res)
},reason=>{
    console.log(reason.message)
})