/**
 * Either函子
 * 异常会让函子变得不纯，Either函子可以用来做异常处理
 */
class Left{
    static of(value){
        return new Left(value)
    }
    constructor(value){
        this._value = value
    }
    map( ){
        return this
    }
}

class Right{
    static of(value){
        return new Right(value)
    }
    constructor(value){
        this._value = value
    }
    map(fn){
        return Right.of(fn(this._value))
    }
}

// let r1 = Right.of(12).map(x => x+2)
// let r2 = Left.of(12).map(x => x+2)
// console.log(r1)
// console.log(r2)


function parseJson(str){
    try {
        return Right.of(JSON.parse(str))
    } catch (error) {
        return Left.of({error:error.message})
    }
}

let r = parseJson('{"name":"sc"}').map(x=> x.name.toUpperCase())
let e = parseJson('{name:sc}')
console.log(r)
console.log(e)