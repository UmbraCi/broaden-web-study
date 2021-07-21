//演示lodash
// first    last        toUpper     reverse         each        includes        find           findIdex

const _ = require('lodash')

const array = ['jack','tom','lucy','kate']

console.log(_.first(array))
console.log(_.last(array))


console.log(_.toUpper(_.first(array)))
console.log(_.reverse(array))       //改变原数组，不纯

_.forEach(array,(item,index)=>{
    console.log(item,index)
})