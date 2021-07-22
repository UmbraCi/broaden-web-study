/**
 * lodash和lodash/fp 模块中map方法的区别
 */
 const fp = require('lodash/fp')
 const _ = require('lodash')


//The iteratee is invoked with three arguments: (value, index|key, collection).
//parseInt第二个参数是转换的进制
console.log(_.map(['23','8','10'],parseInt))

console.log( parseInt('23',0))
console.log( parseInt('8',1))
console.log( parseInt('10',2))

//fp模块  函数优先
console.log(fp.map(parseInt,['23','8','10']))