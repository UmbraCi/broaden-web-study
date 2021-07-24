/**
 * 生成器用途
 */

//1.发号器
function * createIdMaker(){
    let id = 1;
    while(true){
        yield id++
    }
}

let idMaker = createIdMaker()

console.log(idMaker.next())
console.log(idMaker.next())
console.log(idMaker.next())
console.log(idMaker.next())
console.log(idMaker.next())


//2.简化迭代器设计模式是写法
const todo = {
    life:["吃饭","睡觉","打豆豆"],
    learn:["语文","数学","英语"],
    work:["喝茶"],
    //迭代器设计模式是写法
    [Symbol.iterator] : function *(){
        const all = [...this.life,...this.learn,...this.work]
        for(let item of all){
            yield item
        }
    }
}

for (const item of todo) {
    console.log(item)
}
