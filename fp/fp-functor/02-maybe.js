/**
 * maybe函子
 */

class MayBy{
    static of(value){
        return new MayBy(value)
    }
    constructor(value){
        this._value = value
    }
    map(fn){
        return this.isNothing() ? null : MayBy.of(fn(this._value))
    }
    isNothing(){
        return this._value === null || this._value === undefined
    }
}

console.log(MayBy.of('Hello World')
                    .map(x => x.toUpperCase())
                    .map(x => x.toUpperCase())
                    .map(x => null)
                    )


console.log(MayBy.of(null).map(x => x.toUpperCase()))