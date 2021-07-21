/**
 * 柯里化案例
 */

const _ = require('lodash')

// ''.match(/\s+/g)
// ''.match(/\d+/g)




const match = _.curry(function(reg,str){
    return str.match(reg)
})

const haveSpace = match(/\s+/g)
const haveNumber = match(/\d+/g)

console.log(haveSpace('hello world'))

console.log(haveNumber('12dfgsdg3123'))

console.log(haveNumber('sadfasf'))