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
    // throw new Error("executor error")

    // resolve("success")
    // setTimeout(() => {
    //     resolve("success")
    // }, 2000);
    reject("fail")
})
// my_promise.then().then().then(res=>{
//     console.log(res)
// },reason=>{console.log(reason)})

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


// let p1 = my_promise.then((value)=>{
//     console.log("第一个回调函数" + value)
//     // return p1
//     return 123
// },reason=>{
//     console.log(reason)
//     // throw new Error('第一个then函数内抛出一个错误')
//     return 123
// }).then((value)=>{
//     console.log("第2个回调函数" + value)
// },reason=>{
//     console.log(reason.message)
// })

// p1.then(res=>{
//     console.log(res)
// },reason=>{
//     console.log(reason.message)
// })

function p1(){
    return new MyPromise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("p1 resolve")
            resolve("p1")
        },2000)
    })
}

function p2(){
    return new MyPromise((resolve,reject)=>{
        // resolve("p2")
        reject('p2 reject')
    })
}

// MyPromise.all(['a','b',p1(),p2(),'c']).then(res=>{console.log(res)},reason=>{console.log(reason)})
// MyPromise.resolve(100).then(res=>{console.log(res)})
// MyPromise.resolve(p1()).then(res=>{console.log(res)})

// p2().finally(()=>{
//     console.log('finally')
//     return p1()
// }).then(res=>{
//     console.log(res)
// },reason=>{
//     console.log(reason)
// })

p2().then(res=>{console.log(res)}).catch(err=>{console.log(err)})