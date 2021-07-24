/**
 * IO函子：1._value是一个函数
 *        2.把不纯的操作放在_value中,延迟这个不纯的操作（惰性执行）
 *        3.把不纯的操作交给用户处理
 */
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
}

let io = IO.of(process).map(x=> x.execPath)
console.log(io)
console.log(io._value)
console.log(io._value())        //输出node的路径
//我们给map传入的可能是一个不纯的操作，但是经过处理之后，我们保证了IO是以一个纯的操作，不纯的操作我们延迟到了调用_value时，也就达到了副作用在可控范围内。