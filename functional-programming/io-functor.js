/**
 * IO函子:
 * IO就是输入输出，IO函子中的value就是一个函数，这里把函数当做值来处理
 * IO函子可以把不纯的函数存储到value中，延迟执行这个函数
 * 把不纯的操作交给调用者来处理
 */

// console.log(process.execPath)
const fp = require("lodash/fp")
class IO{
    // of方法快速创建IO，要一个值返回一个函数，将来需要值的时候再调用函数
    static of(val){
        return new IO(()=>val)
    }
    // 传入的是一个函数
    constructor(fn){
        this.value = fn
    }
    map(fn){
        // 这里用的是new一个新的构造函数，是为了把当前value的函数和map传入的fn进行组合成新的函数
        return new IO(fp.flowRight(fn,this.value))
    }
}


//在map函数中延迟执行，先实例化一个IO对象，对象的value为一个返回node的process对象的函数，然后执行map函数
//这里的map函数中传入的函数的x实参此时为this.value即“返回process对象的函数”，执行完毕以后返回process对象传递给fn，也就是x=process
//x.execPath返回node的运行环境地址，然后又传给IO的构造函数，返回一个IO对象，这个对象的value值为process运行环境地址
let io = IO.of(process).map(x => x.execPath)
console.log(io)
console.log(io.value())