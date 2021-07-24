/**
 * 柯里化
 */
let checkAge = (min)=>{
    return (age)=>{
        return age > min
    }
}
let checkAge18 = checkAge(18)

console.log(checkAge18(20))
console.log(checkAge18(17))