/**
 * lodash中的map函数和lodash/fp模块中的map方法的区别
 */

const _ = require("lodash")
//因为lodash中的map函数的形参。传入的迭代函数会被传入三个参数(value, index|key, collection).而此时index序号就成了paseInt函数进制的传入参数
console.log(_.map(["23","8","10"],parseInt))

const fp = require("lodash/fp")
console.log(fp.map(parseInt,["23","8","10"]))