/**
 * folktale 中的compose、curry
 */
 const { curry,compose  } = require('folktale/core/lambda');

 function add(a, b) {
    return a + b;
  }

console.log( curry(2, add)(1, 2))


const inc    = (x) => x + 1;
const double = (x) => x * 2;

const incDouble = compose(double, inc);

console.log(incDouble(2))