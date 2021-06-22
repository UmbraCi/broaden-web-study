/**
 * generator    生成器
 */

// function * foo(){
//     console.log("object")
//     return 100
// }

// let f = foo()
// console.log(f)
// console.log(f.next())

function * foo(){
    console.log("111")
    yield 1
    console.log("222")
    yield 2
    console.log("333")
    return 3
}
let gen = foo()
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
