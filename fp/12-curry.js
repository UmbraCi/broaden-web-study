/**
 * 模拟实现lodash中的curry函数
 */

//  const _ = require('lodash')



 function getSum(a,b,c){
     return a + b + c
 } 
 
//  const curried = _.curry(getSum)
 
//  console.log(curried(1,2,3))
//  console.log(curried(1,2)(3))
//  console.log(curried(1)(2,3))


 function curry(fn){
     return function curriedFn(...args){
         //判断实参和形参的个数
         if(args.length < fn.length){
             //实参个数小于形参
             return function(){
                return curriedFn(...args,...arguments)
             }
         }
         return fn(...args)
     }
 }

 const curried = curry(getSum)
 console.log(curried(1,2,3))
 console.log(curried(1,2)(3))
 console.log(curried(1)(2,3))