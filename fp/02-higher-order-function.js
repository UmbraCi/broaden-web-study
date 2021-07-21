//高阶函数-函数作为返回值

function makeFn(){
    let msg = 'hello function'
    return function(){
        console.log(msg)
    }
}

const fn = makeFn()
// fn()

function once(fn){
    let done = false
    return function(){
        if(!done){
            done = true
            return fn.apply(this,arguments)
        }
    }
}

let pay = once(function(money){
    console.log(`支付了 ${money} RMB`)
})

pay(5)
pay(5)
pay(5)
pay(5)
pay(5)
pay(6)