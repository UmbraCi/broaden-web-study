//高阶函数-函数作为参数

/**
 * 1.模拟forEach函数
 * 2.模拟filter函数
 */

function forEach(array,fn){
     for (let index = 0; index < array.length; index++) {
         fn(array[index])
     }
}

let arr = [1,2,3,8,9,7]

forEach(arr,function(item){
    console.log(item)
})

function filters(array,fn){
    let resulet = []
    for (let index = 0; index < array.length; index++) {
        if(fn(array[index])){
            resulet.push(array[index])
        }
    }
    return resulet
}

console.log(filters(arr,(item)=>{
    return item % 2 ===0
}))