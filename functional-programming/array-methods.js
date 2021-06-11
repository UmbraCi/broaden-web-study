/**
 * 高阶函数：函数作为参数、函数作为返回值
 * 1.这个文件写的是函数作为参数实现array的常用三种方法
 * map,some,every,
 */

const map = (array,fn)=>{
    let result = []
    for(let item of array){
        result.push(fn(item))
    }
    return result
}

// let arr = [1,2,3,4]
// let new_arr = map(arr,(item)=>{
//     return item * item;
// })
// console.log(new_arr)

const some = (array,fn)=>{
    for(let item of array){
        if(fn(item)){
            return true
        }
    }
    return false
}

// let arr = [1,2,3,4]
// let r = some(arr,(item)=>{
//     return item >= 4;
// })
// console.log(r)

const every = (array,fn)=>{
    for(let item of array){
        if(!fn(item)){
            return false
        }
    }
    return true
}

let arr = [1,2,3,4]
let r = every(arr,(item)=>{
    return item >= 2;
})
console.log(r)