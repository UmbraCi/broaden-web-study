/**
 * 使用lodash中的fp模块（普通的不带fp的模块中都是数据优先函数之后，像compose-debug中我们就需要在柯里化函数中调换一下实参顺序,fp模块的就不用了
 * 因为是已经柯里化后的函数，而且是函数参数优先）
 */

const fp = require("lodash/fp")
const _ = require("lodash")

const f = _.flowRight(fp.join(" "), fp.map(_.toLower) ,fp.split(" "))

console.log(f("NEVER SAY DIE"))