//MyPromise.js

const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'


class MyPromise {
    constructor(executor) {
        try {
            executor(this.resolve, this.reject)
        } catch (error) {
            this.reject(error)
        }
    }
    //初始化为准备状态
    status = PENDING
    //成功的原因
    value = undefined
    //失败的原因
    reason = undefined
    //存储起来的回调
    successCallback = []
    failCallback = []
    resolve = (value) => {
        //状态一旦改变就定型
        if (this.status != PENDING) return
        this.status = FULFILLED
        //保存成功以后的值
        this.value = value
        //如果之前存储了回调函数则此时调用
        while (this.successCallback.length) {
            this.successCallback.shift()()
        }
    }
    reject = (reason) => {
        if (this.status != PENDING) return
        this.status = REJECTED
        //保存失败以后的值
        this.reason = reason
        //如果之前存储了回调函数则此时调用
        while (this.failCallback.length) {
            this.failCallback.shift()()
        }
    }
    then(successCallback, failCallback) {
        successCallback = successCallback ? successCallback : value => value
        failCallback = failCallback ? failCallback : (reason)=>{throw reason}
        let promise2 = new MyPromise((resolve, reject) => {
            if (this.status == FULFILLED) {
                setTimeout(() => {
                    try {
                        //成功则调用成功以后的回调
                        let x = successCallback(this.value)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                }, 0);
            } else if (this.status == REJECTED) {
                //失败则调用失败后的回调
                setTimeout(() => {
                    try {
                        let x = failCallback(this.reason)
                        resolvePromise(promise2, x, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                }, 0);
            } else {
                //pending状态 存储回调函数
                this.successCallback.push(()=>{
                    setTimeout(() => {
                        try {
                            //成功则调用成功以后的回调
                            let x = successCallback(this.value)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    }, 0);
                })
                this.failCallback.push(()=>{
                    setTimeout(() => {
                        try {
                            let x = failCallback(this.reason)
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    }, 0);
                })
            }
        })
        return promise2
    }
    finally(callback){
        //因为在finally后面还可以继续链式调用，所以此处应该返回一个promise
        //又因为.then方法本来就返回一个promise，且可以获得finally时的promise状态
        return this.then((val)=>{
            return MyPromise.resolve(callback()).then(()=>val)
        },(reason)=>{
            return MyPromise.resolve(callback()).then(()=>{throw reason})
        })
    }
    catch(failCallback){
        return this.then(undefined,failCallback)
    }
    //all肯定是个静态方法，因为可以用MyPromise.all调用，且实参是个数组
    static all(array){
        return new MyPromise((resolve,reject)=>{
            let result = []
            let index = 0
            function addRes(key,val){
                result[key] = val
                index ++
                if(index == array.length){
                    resolve(result)
                }
            }
            //要循环遍历传入的数组
            for(let i=0;i<array.length;i++){
                let current = array[i]
                if(current instanceof MyPromise){
                    //如果是promise
                    current.then(val=> addRes(i,val),reason=>reject(reason))
                }else{
                    addRes(i,current)
                }
            }
        })
    }
    static resolve(val){
        if(val instanceof MyPromise){
            return val
        }else{
            //若是普通值
            return new Promise(resolve=>{
                resolve(val)
            })
        }
    }
}
function resolvePromise(promise2, x, resolve, reject) {
    if (promise2 === x) {
        //如果第一个then函数的返回值跟then函数回调函数的返回值是否相等
        reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
        return
    }
    if (x instanceof MyPromise) {
        //如果是promise
        // x.then(value=>resolve(value),reason=>reject(reason))
        //简写  .then方法会注册回调，resolve是一个函数，.then执行successCallback的时候会传递this.value作为实参，所以这里可以简写
        x.then(resolve, reject)
    } else {
        //如果是普通值
        resolve(x)
    }
}

//CommonJS模块方案导出
module.exports = MyPromise