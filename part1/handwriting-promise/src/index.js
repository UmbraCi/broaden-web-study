//index.js

const MyPromise = require('./MyPromise')

function p1(){
    return new MyPromise((resolve,reject)=>{
        setTimeout(() => {
            resolve("success")
        }, 2000);
    })
}

function p2(){
    return new MyPromise((resolve,reject)=>{
        // resolve("success2")
        reject('fail')
    })
}


p2().then(res=>{console.log("res:" + res)}).catch(res=>{
    console.log('catch:'+res)
})