/**
 * debug compose函数
 * NEVER SAY DIE ->  never say die
 */
const _ = require("lodash")

//debug function
function debug_console (v){
    console.log(v)
    return v
}

const split = _.curry((sep,str) => _.split(str,sep))

const map = _.curry((fn,arr) => arr.map(fn))

const join  = _.curry((sep,arr) => _.join(arr,sep))

const f = _.flowRight(debug_console,join(" "),debug_console, map(_.toLower) ,debug_console,split(" "))

// f("NEVER SAY DIE")

console.log(f("NEVER SAY DIE"))