const net = require('net')

const myTransform = require('./myTransform.js')

const server = net.createServer()

server.listen('1234','localhost')

server.on('listening',()=>{
    console.log('服务端运行在localhost:1234')
})

let overageBuffer = null

let ts = new myTransform()

server.on('connection',(socket)=>{
    socket.on('data',(chunk)=>{
        if(overageBuffer){
            chunk = Buffer.concat([overageBuffer,chunk])
        }
        let packageLen = 0
        while(packageLen = ts.getPackageLen(chunk)){
            const packageCON = chunk.slice(0,packageLen)
            chunk = chunk.slice(packageLen)
            
            const ret = ts.decode(packageCON)
            console.log(ret)
            socket.write(ts.encode(ret.body,ret.serialNum))
        }
        overageBuffer = chunk
    })
})