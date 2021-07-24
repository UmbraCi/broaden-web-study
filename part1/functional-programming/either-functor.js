/**
 * either函子
 */
class Left {
    constructor(value){
        this.value = value
    }
    static of(val){
        return new Left(val)
    }
    map(fn){
        return this
    }
}

class Right{
    constructor(value){
        this.value = value
    }
    static of(val){
        return new Right(val)
    }
    map(fn){
        return Right.of(fn(this.value))
    }
}

let r1 = Right.of(12).map(x => x+2)
let r2 = Left.of(12).map(x => x+2)
console.log(r1)
console.log(r2)


let str = '{name : zz}'
let str1 = '{"name" : "zz"}'
function ParseJSON(str){
    try {
        return Right.of(JSON.parse(str))
    } catch (error) {
        return Left.of({message:error.message})
    }
}

console.log(ParseJSON(str).map(x => x.name.toUpperCase()))
console.log(ParseJSON(str1).map(x => x.name.toUpperCase()))