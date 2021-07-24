/**
 * lodash中的FP模块
 * NEVER SAY DIE        =>      never-say-die 
 * 
 * FP模块中的函数都是已经被柯里化的
 */

const fp = require('lodash/fp')


const f = fp.flowRight(fp.join('-'),fp.map(fp.toLower),fp.split(' '))

console.log(f('NEVER SAY DIE'))