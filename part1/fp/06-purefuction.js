//纯函数和不纯的函数
//slice     /   splice

let array = [1,2,3,4,5]

//纯函数
console.log(array.slice(0,3))
console.log(array.slice(0,3))
console.log(array.slice(0,3))


//不纯
console.log(array.splice(0,1))
console.log(array.splice(0,1))
console.log(array.splice(0,1))


