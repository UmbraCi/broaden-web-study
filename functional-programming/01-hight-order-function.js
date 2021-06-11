// "use strict"
/**
 * 高阶函数：函数作为参数
 */





//apply应用
function fn (n1,n2){
    console.log(this)
    console.log(n1)
    console.log(n2)
    console.log(arguments)
}

let obj = {fn:fn}

// fn.call(this,1,2)
// fn.apply(this,[1,2])
// console.log(this)
// fn.apply(obj,[1,2,3,4,5,6])

//模拟once函数
function once(fn){
    let done = false;
    return function(){
        if(!done){
            done = true
            //once生成函数，调用（调用once生成函数）的参数->赋值给once函数参数的那个函数
            fn.apply(this,arguments)
        }
    }
}

let pay = once(function(money){
    console.log(this)
    console.log("支付了"+money+"元")
})
pay(1)
pay(2)
pay(3)
pay(4)
pay(5)
