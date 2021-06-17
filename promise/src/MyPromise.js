const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
class MyPromise{
    
    constructor(executor){
        executor(this.resolve,this.reject)
    }
    //promise状态
    status = PENDING
    //成功和失败回调的参数
    value = undefined
    reason = undefined
    successCallback = undefined
    failCallback = undefined
    resolve = (value)=>{
        //确保状态一旦更改就定型
        if(this.status!=PENDING) return
        //更改状态
        this.status = FULFILLED
        this.value = value
        this.successCallback && this.successCallback(value)
    }
    reject=(reason)=>{
        if(this.status!=PENDING) return
        this.status = REJECTED
        this.reason = reason
        this.failCallback && this.failCallback(reason)
    }
    then(successCallback,failCallback){
        //判断状态
        if(this.status == FULFILLED){
            successCallback(this.value)
        }else if(this.status == REJECTED){
            failCallback(this.reason)
        }else{
            //等待   将成功和失败的回调存储起来
            this.successCallback = successCallback
            this.failCallback = failCallback
        }
    }
}

module.exports = MyPromise