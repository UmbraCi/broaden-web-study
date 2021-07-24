/**
 * 函数组合的结合律
 */
 const _ = require('lodash')

 const reverse = arr => arr.reverse()
 const first = arr => arr[0]
 const toUpper = s => s.toUpperCase() 

 const compose = _.flowRight(toUpper,_.flowRight(first,reverse))
 console.log(compose(['one','two','three']))