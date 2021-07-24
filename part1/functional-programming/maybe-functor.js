/**
 * Maybe函子：在做字符串处理的时候，如果一个字符串是 null, 那么对它进行 toUpperCase() 就会报错。
 * 需要对 null 值进行特殊过滤
 */
class Maybe{
    static of(value){
        return new Maybe(value)
    }
    constructor(value){
        this.value = value
    }
    map (fn){
        // return new Maybe(fn(this.value))
        return this.value ? Maybe.of(fn(this.value)) : Maybe.of(null)
    }
}
// let r = new Maybe(5).map(x=>x+1).map(x=>x*x)
let r = Maybe.of(null).map(x => x.toUpperCase())
console.log(r)