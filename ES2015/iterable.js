//实现可迭代接口
const obj = {
    store :["123","avs","bcd"],
    [Symbol.iterator]:function(){
        let index = 0;
        const self = this;
        return {
            next:function(){
                //返回迭代结果
                const result = {
                    value:self.store[index],
                    done:index>=self.store.length
                }
                index++ 
                return result
                
            }
        }
    }
}

for(let item of obj){
    console.log(item)
}