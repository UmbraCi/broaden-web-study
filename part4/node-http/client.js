const net = require('net')

const myTransform = require('./myTransform.js')

const ts = new myTransform()
let overageBuffer = null

const client = net.createConnection({
    host:'localhost',
    port:1234
})

client.write(ts.encode('拉钩教育1'))
client.write(ts.encode('拉钩教育2'))
client.write(ts.encode('拉钩教育3'))
client.write(ts.encode('拉钩教育4'))

client.on('data',(chunk)=>{
    // console.log(chunk.toString())
    if(overageBuffer){
        chunk = Buffer.concat([overageBuffer,chunk])
    }
    let packageLen = 0 
    while(packageLen = ts.getPackageLen(chunk)){
        const packageCON = chunk.slice(0,packageLen)
        chunk = chunk.slice(packageLen)
        
        const ret = ts.decode(packageCON)
        console.log(ret)
    }
    overageBuffer = chunk
})