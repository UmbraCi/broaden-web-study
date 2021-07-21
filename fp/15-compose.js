/**
 * 模拟实现lodash中的flowRight
 */
//  const _ = require('lodash')

 const reverse = arr => arr.reverse()
 const first = arr => arr[0]
 const toUpper = s => s.toUpperCase() 
 
 
//  const compose = _.flowRight(toUpper,first,reverse)
//  console.log(compose(['one','two','three']))

 const flowRight = function(...arg){
     return function(value){
         return arg.reverse().reduce((acc,cur)=>{
             return cur(acc)
         },value)
     }
 }

 const compose = flowRight(toUpper,first,reverse)
 console.log(compose(['one','two','three']))