const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
class MyPromise {

    constructor(executor) {
        executor(this.resolve, this.reject)
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
            this.successCallback.shift()(value)
        }
    }
    reject = (reason) => {
        if (this.status != PENDING) return
        this.status = REJECTED
        this.reason = reason
        while (this.failCallback.length) {
            this.failCallback.shift()(reason)
        }
    }
    then(successCallback, failCallback) {

        //如果想实现连续的链式调用就得在then方法中返回一个新的promise。这个promise resolve的值就是回调函数的返回值
        let promise2 = new MyPromise((resolve, reject) => {
            //判断状态
            if (this.status == FULFILLED) {
                let success = successCallback(this.value)
                resolve(success)
            } else if (this.status == REJECTED) {
                let fail = failCallback(this.reason)
                reject(fail)
            } else {
                //等待   将成功和失败的回调存储起来
                this.successCallback.push(successCallback)
                this.failCallback.push(failCallback)
            }

        })
        return promise2
    }
}

module.exports = MyPromise