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
    //promise状态
    status = PENDING
    //成功和失败回调的参数
    value = undefined
    reason = undefined
    successCallback = []
    failCallback = []
    resolve = (value) => {
        //确保状态一旦更改就定型
        if (this.status != PENDING) return
        //更改状态
        this.status = FULFILLED
        this.value = value
        while (this.successCallback.length) {
            this.successCallback.shift()()
        }
    }
    reject = (reason) => {
        if (this.status != PENDING) return
        this.status = REJECTED
        this.reason = reason
        while (this.failCallback.length) {
            this.failCallback.shift()()
        }
    }
    then(successCallback, failCallback) {
        //then方法参数变成可选
        successCallback = successCallback ? successCallback : value => value
        failCallback = failCallback ? failCallback : (reason) => { throw reason }
        //如果想实现连续的链式调用就得在then方法中返回一个新的promise。这个promise resolve的值就是回调函数的返回值
        let promise2 = new MyPromise((resolve, reject) => {
            //判断状态
            if (this.status == FULFILLED) {

                //变为异步
                setTimeout(() => {
                    try {
                        let success = successCallback(this.value)
                        //处理回调函数返回的值（链式调用）
                        //判断成功回调返回的值是否是promise对象，如果是普通值则直接调用resolve()这个普通值
                        //如果是promise对象则先判断这个promise对象的状态，根据状态来执行resolve或者reject
                        resolvePromise(promise2, success, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                }, 0)


            } else if (this.status == REJECTED) {

                //变为异步
                setTimeout(() => {
                    try {
                        let fail = failCallback(this.reason)
                        //处理回调函数返回的值（链式调用）
                        //判断成功回调返回的值是否是promise对象，如果是普通值则直接调用resolve()这个普通值
                        //如果是promise对象则先判断这个promise对象的状态，根据状态来执行resolve或者reject
                        resolvePromise(promise2, fail, resolve, reject)
                    } catch (error) {
                        reject(error)
                    }
                }, 0)
            } else {
                //等待   将成功和失败的回调存储起来
                this.successCallback.push(() => {

                    //变为异步
                    setTimeout(() => {
                        try {
                            let x = successCallback(this.value)
                            //处理回调函数返回的值（链式调用）
                            //判断成功回调返回的值是否是promise对象，如果是普通值则直接调用resolve()这个普通值
                            //如果是promise对象则先判断这个promise对象的状态，根据状态来执行resolve或者reject
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    }, 0)

                })
                this.failCallback.push(() => {
                    //变为异步
                    setTimeout(() => {
                        try {
                            let x = failCallback(this.reason)
                            //处理回调函数返回的值（链式调用）
                            //判断成功回调返回的值是否是promise对象，如果是普通值则直接调用resolve()这个普通值
                            //如果是promise对象则先判断这个promise对象的状态，根据状态来执行resolve或者reject
                            resolvePromise(promise2, x, resolve, reject)
                        } catch (error) {
                            reject(error)
                        }
                    }, 0)

                })
            }

        })
        return promise2
    }
    finally(callback){
        return this.then((value)=>{
            return MyPromise.resolve(callback()).then(()=>value)
        },(reason)=>{
            return MyPromise.resolve(callback()).then(()=>{throw reason})
        })
    }
    catch(failCallback){
        return this.then(undefined,failCallback)
    }
    static all(array) {
        return new MyPromise((resolve, reject) => {
            let result = []
            let index = 0
            function addData(key, val) {
                result[key] = val
                index++
                if (index == array.length) {
                    resolve(result)
                }
            }
            for (let i = 0; i < array.length; i++) {
                let current = array[i];
                if (current instanceof MyPromise) {
                    //promise对象
                    current.then(value => {
                        addData(i, value)
                    }, reason => {
                        reject(reason)
                    })
                } else {
                    //普通值
                    addData(i, current)
                }

            }
        })
    }
    static resolve(value){
        if(value instanceof MyPromise){
            //promise对象
            return value
        }else{
            //普通值
            return new MyPromise(resolve=>{resolve(value)}) 
        }
    }
}

//判断resolve返回的对象(x)是否是promise，并且做出相应处理
function resolvePromise(promise2, x, resolve, reject) {
    if (x === promise2) {
        reject(new TypeError('Chaining cycle detected for promise #<Promise>'))
        return
    }
    if (x instanceof MyPromise) {
        //promise对象
        //这里第一个promise成功以后，把第一个promise的回调里面返回的promise对象x的then函数调用下
        x.then(value => { resolve(value) }, reason => { reject(reason) })
        //也可以简写（resolve和reject都是返回的promise的）传递给下一个promise对象(promise2)，改变promise2的状态
        // x.then(resolve,reject)
    } else {
        //普通值        传递给下一个promise对象
        resolve(x)
    }
}

module.exports = MyPromise