/**
 * 实现了join 和of 方法的函子叫monad函子
 */


const fs = require('fs')
const fp = require('lodash/fp')
const _ = require("lodash")
class IO{
    static of(value){
        //这里构造函数里面放的是function
        return new IO(function(){
            return value
        })
    }
    constructor(value){
        this._value = value
    }
    map(fn){
        // 返回IO，但是此时我们使用的是IO的构造函数
        // 此时我们使用fp模块中的flowRight将IO函子中存储的value(函数)和map传入的fn进行组合
        return new IO(_.flowRight(fn,this._value))
    }
    join(){
        return this._value()
    }

    //把map和join合起来使用
    flatMap(fn){
        return this.map(fn).join()
    }
}

let readFile = function (filename){
    return new IO(function(){
        return fs.readFileSync(filename,'utf-8')
    })
}

let print = function(x) {
    return new IO(function(){
        console.log(x)
        return x
    })
}

let cat = fp.flowRight(print,readFile)
//cat 里面 IO(IO())



//cat('package.json')._value()返回的是readFile中返回的IO函子
//cat('package.json')._value()._value() 返回的是fs.readFileSync('package.json','utf-8')


// let r = cat('package.json')._value()._value()
// console.log(r)

let r = readFile('package.json')
            .map(fp.toUpper)    
            .flatMap(print).join()
console.log(r)