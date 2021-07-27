/**
 * gulp异步的三种方式：
 * 1、回调函数
 * 2、promise
 * 3、async
 */
exports.callback = (done)=>{
    console.log('callback task')
    done()
}

exports.callback_error = done =>{
    console.log('callback_error')
    done(new Error('task failed'))
}

exports.promise = ()=>{
    console.log('promise task~')
    return Promise.resolve('123')        //resolve括号里写值也不会被传递
}

exports.promise_error = ()=>{
    console.log('promise task~')
    return Promise.reject('reject failed')        //resolve括号里写值也不会被传递
}

//async需要node8以上
const timeout = time => {
    return new Promise(resolve=>{
        setTimeout(resolve,time)
    })
}

exports.async = async() =>{
    await timeout(1000)
    console.log('async task~')
}

const fs = require('fs')

exports.stream = ()=>{
    const readStream = fs.createReadStream('package.json')
    const writeStream = fs.createWriteStream('temp.txt')
    readStream.pipe(writeStream)
    return readStream
}

//读取文件流结束后会有一个end事件，所以这里我们也可以模拟一下上面的原理
exports.stream_simulate = (done)=>{
    const readStream = fs.createReadStream('package.json')
    const writeStream = fs.createWriteStream('temp1.txt')
    readStream.pipe(writeStream)
    readStream.on('end',()=>{
        done()
    })
    // return readStream
}