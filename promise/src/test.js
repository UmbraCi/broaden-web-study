let promise = new Promise((resolve,reject)=>{
    resolve(100)
})

//循环调用错误
let p1 = promise.then(res=>{
    console.log(res)
    return p1
})

// p1.then(()=>{},(reason)=>{
//     console.log(reason)     //Chaining cycle detected for promise #<Promise>
// })