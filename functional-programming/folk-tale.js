/**
 * folktale 一个标准的函数式编程库。
 * 和 lodash、ramda 不同的是，他没有提供很多功能函数。
 * 只提供了一些函数式处理的操作，例如：compose、curry 等，一些函子 Task、Either、 MayBe 等
 */

const {curry,compose} = require("folktale/core/lambda")
const {toUpper,first} = require("lodash/fp")


let f = curry(2, (x , y) => {
    return x + y
})

console.log(f(1,2))
console.log(f(1)(2))

let fn = compose(toUpper,first)
console.log(fn(["one","two"]))