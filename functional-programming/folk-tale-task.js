/**
 * 使用folktale中的task方法来异步读取package.json中的version字段
 */
const {task} = require("folktale/concurrency/task")
const {split,find} = require("lodash/fp")
//node中的读取文件方法
const fs = require("fs")
function readFile(filename){
    return task(resolver=>{
        fs.readFile(filename,'utf-8',(err,data)=>{
            if(err){
                resolver.reject(err)
            }
            resolver.resolve(data)
        })
    })
}

readFile('package.json')
        .map(split('\n')).map(find(x=>x.includes('version'))).run()
            .listen({onRejected:  (reason) => console.log(reason),
                    onResolved:  (value) => console.log(value)})