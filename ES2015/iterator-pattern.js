/**
 * 迭代器设计模式
 */


const todo = {
    life:["吃饭","睡觉","打豆豆"],
    learn:["语文","数学","英语"],
    work:["喝茶"],
    //普通写法
    each:function(callback){
        const all = [].concat(this.life,this.learn,this.work)
        for(const item of all ){
            callback(item)
        }
    },
    //迭代器设计模式是写法
    [Symbol.iterator] : function(){
        const all = [...this.life,...this.learn,...this.work]
        let index = 0
        return{
            next :function(){
                const result = {
                    value:all[index],
                    done:index++ >= all.length
                }
                return result
            }
        }
    }
}

// todo.each((item)=>{
//     console.log(item)
// })

for (const item of todo) {
    console.log(item)
}


